const express = require("express");
const router = express.Router();
const db = require("../data/db");
const imageUpload = require("../helpers/image-upload");

router.post("/update/eat",imageUpload.single("resim"), async function(req,res){
  const urunid=req.body.urunid;
  const name = req.body.name;
  const aciklama = req.body.aciklama;
  const fiyat = req.body.fiyat;
  const resim = req.body.resim;
  const kategori = req.body.kategori;
  try{
    await db.execute("UPDATE urun SET name=?, aciklama=?, fiyat=?, resim=?, categoryid=? WHERE urunid=?",[name, aciklama, fiyat, resim, kategori, urunid]);
    res.redirect("users/index")
  }catch(err){
    console.log(err)
  }
});

router.get("/update/eat", async function (req, res) {
  try {
    const [urun] = await db.execute("SELECT * from urun");
    const [category] = await db.execute("SELECT * from category");
    res.render("admin/update-eat", {
      title: "Yemek Güncelle",
      urun: urun,
      category: category,
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/create/eat",imageUpload.single("resim"), async function (req, res) {
  const name = req.body.name;
  const aciklama = req.body.aciklama;
  const fiyat = req.body.fiyat;
  const resim = req.file.filename;
  const kategori = req.body.kategori;
  try {
    await db.execute(
      "INSERT INTO urun(name, aciklama, fiyat, resim, categoryid) VALUES (?,?,?,?,?)",
      [name, aciklama, fiyat, resim, kategori]
    );
    res.redirect("users/index");
  } catch (err) {
    console.log(err);
  }
});

router.use("/create/eat", async function (req, res) {
  try {
    const [categories] = await db.execute("SELECT * from category");
    res.render("admin/create-eat", {
      title: "Yemek Ekle",
      category: categories,
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/create/category", imageUpload.single("resim"), async function (req, res) {
    const name = req.body.name;
    const resim = req.file.filename;

    try {
      await db.execute("INSERT INTO category(name, resim) VALUES (?,?)", [
        name,
        resim,
      ]);
      res.redirect("users/index");
    } catch (err) {
      console.log(err);
    }
  }
);

router.use("/create/category", async function (req, res) {
  res.render("admin/create-category", {
    title: "Kategori Ekle",
  });
});

router.post("/delete/category", async function (req, res) {
  const kategori = req.body.kategori;
  try {
    await db.execute("DELETE from category WHERE categoryid=?", [kategori]);
    res.redirect("users/index");
  } catch (err) {
    console.log(err);
  }
});

router.use("/delete/category", async function (req, res) {
  const categoryid = req.params.categoryid;
  try {
    const [category] = await db.execute("SELECT * from category");

    res.render("admin/delete-category", {
      title: "Kategori Sil",
      category: category,
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/delete/eat", async function (req, res) {
  const yemek = req.body.urun;
  try {
    await db.execute("DELETE from urun WHERE urunid=?", [yemek]);
    res.redirect("users/index");
  } catch (err) {
    console.log(err);
  }
});

router.get("/delete/eat", async function (req, res) {
  try {
    const [category] = await db.execute("SELECT * from category");
    const [urun] = await db.execute("SELECT * from urun ");
    res.render("admin/delete-eat", {
      title: "Yemek Sil",
      category: category,
      urun: urun,
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async function (req, res) {
  try {
    const [category] = await db.execute("SELECT * from category");
    res.render("admin/admin", {
      title: "Admin",
      category: category,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
