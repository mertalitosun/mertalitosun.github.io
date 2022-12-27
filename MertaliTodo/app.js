const todoList = document.querySelector(".todoList");
const brand = document.getElementById("brand");
const input = document.getElementById("input");
const add = document.getElementById("add");
const dlt = document.getElementById("dlt");
const addBrand = document.getElementById("addBrand");
const header = document.querySelector(".navbar");

// localstorage da todos key ile dizi oluşturur.
const getStorage = () => {
    const storage = JSON.parse(localStorage.getItem("todos"));
    return (storage) ? storage : [] ;
}


const todos = getStorage();


// oluşturulan dizide döner ve dizidekileri ekrana yazdırır
const getTodosToPage = () => {
    todos.forEach((todo) => {
        createTodo(todo);
    });
}

// ekran yenilendiğinde fonksiyonu çağırır
window.addEventListener("load", () => {
    getTodosToPage();
})

// localStorage'a todo ekler
const saveTodoStorage = (todo) => {

    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
    createTodo(todo);
}

// ekrandan todo siler
const removeTodo = (target) => {
    // console.log(target.parentNode.childNodes[0].innerHTML);
    const todo = target.parentNode.childNodes[0].innerHTML;
    target.parentNode.parentNode.remove();
    removeTodoStorage(todo);
}
// localStorage dan todo siler
const removeTodoStorage = (todo) => {
    const index = todos.indexOf(todo);
    todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(todos));
}


// const createBrand = (text) => {
//     createBrandSpan(text);
// }



// todolist ad ekleme 

// const createBrandSpan = (brandinp) => {
//     const brandInput = document.createElement("input");
//     const brandText = document.createElement("span");
//     brandText.innerHTML = brandinp;
//     header.appendChild(brandInput);
//     addBrand.appendChild(brandText);
// }



// inputları ekrana yazdırır
const createTodo = (text) =>{
    const todoItem = document.createElement("div");
    todoItem.classList.add("todoItem");
    const todoItemLi = document.createElement("li");
    const todoText = document.createElement("span");
    todoText.innerHTML = text;
    const dltbtn = document.createElement("button");
    dltbtn.classList.add("delete", "btn", "btn-danger","fa-solid", "fa-trash");
    dltbtn.setAttribute("onclick","removeTodo(this)");

    // edit butonu
    // const edtbtn = document.createElement("button");
    // edtbtn.classList.add("delete", "btn", "btn-warning","fa-solid", "fa-trash");
    // edtbtn.setAttribute("onclick","todoEdit(this)");

    todoItem.appendChild(todoItemLi);
    todoItemLi.appendChild(todoText);
    todoItemLi.appendChild(dltbtn);
    todoList.appendChild(todoItem);

}

// butona tıklandığında ekrana yazan fonksiyonu çağırır
add.addEventListener("click", () => {
    if(input.value){
        saveTodoStorage(input.value);
        input.value = "";
        
    }
    else{
        alert("Boş Todo Oluşturulamaz!");
    }
    
})

// addBrand.addEventListener("click", () => {
//     createBrand(brandInput.value);
// })

