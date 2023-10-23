const express = require("express");
const router = express.Router();
const db = require("../data/db");

router.use("/menu-list/:categoryid", async function (req, res) {
  const categoryid = req.params.categoryid;
  try {
    const [category] = await db.execute("SELECT * from category");
    const [urun] = await db.execute("SELECT * from urun WHERE categoryid=?",[categoryid]);
    res.render("users/menu-list", {
      title: urun.name,
      category: category,
      urun: urun,
    });
  } catch (err) {
    console.log(err);
  }
});

router.use("/", async function (req, res) {
  try {
    const [category] = await db.execute("SELECT * from category");
    const [urun] = await db.execute("SELECT * from urun");

    res.render("users/index", {
      title: "Anasayfa",
      category: category,
      urun: urun,
    });
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
