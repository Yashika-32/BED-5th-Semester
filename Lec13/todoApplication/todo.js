let todoInput= document.querySelector(".todoTitle");
let todoForm=document.querySelector("#todoform");
let todoContainer = document.querySelector(".todoContainer");

let todoArray=[]

todoForm.addEventListener("submit",function(e){
    e.preventDefault();
    let value=inputValue();
    let newTodo={
        id:Math.floor(Math.random*10000),
        title:value
    }
    todoArray.push(newTodo);
    // addTodo(newTodo)
    showAllTodos(todoArray)
    todoInput.value=""
})
function inputValue(){
   return todoInput.value 
}

function addTodo(todo){
    let li = document.createElement("li");
    li.setAttribute("id",`${todo.id}`)
    li.innerHTML=` <div>
                <input type="checkbox" name="" id="checkbox">
                <h1>${todo.title}</h1>
                <div>
                    <button class="edit">✏</button>
                    <button class="delete">❌</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officiis!</p>
                </div>
            </div>`
        todoContainer.appendChild(li);

}
function showAllTodos(todoArray){
    todoContainer.innerHTML="";
    todoArray.forEach(todo => {
        addTodo(todo)
    });
}