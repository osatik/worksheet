// let data = [
//     {
//         "id": 1,
//         "todo": "Alişveriş yap",
//         "isDone": false,
//         "priority": "yüksek"
//     },
//     {
//         "id": 2,
//         "todo": "Raporu bitir",
//         "isDone": false,
//         "priority": "orta"
//     },
//     {
//         "id": 3,
//         "todo": "Spor yap",
//         "isDone": true,
//         "priority": "düşük"
//     },
//     {
//         "id": 4,
//         "todo": "Toplantiya katil",
//         "isDone": false,
//         "priority": "yüksek"
//     },
//     {
//         "id": 5,
//         "todo": "Kitap oku",
//         "isDone": false,
//         "priority": "orta"
//     }
// ]


  
    

    let todos = JSON.parse(sessionStorage.todos)
    console.log(todos);
    let todosClass = document.querySelector(".todos")
    let todoInput = document.querySelector(".todoEnter > input")
    let priority= document.querySelector("#priority")
    let yeniId = 10
    let addButton = document.querySelector(".todoEnter button")

    const addStorage = (data) => {
        sessionStorage.todos = JSON.stringify(data)
    }
    const getStorage = () => {
        return JSON.parse(sessionStorage.todos)
    }

    const showTodos = (data) => {
        todosClass.innerHTML =""
        data.forEach(todo => {
            todosClass.innerHTML += `
                <div class = "todo">
                    <p>${todo.id}</p>
                    <p>${todo.todo}</p>
                    <p>${todo.priority}</p>  
                    <button>sil</button>
                </div>
            `                       
        });
    }

    const createTodo = () => {
        yeniId++      
        let todoData = { id:yeniId, todo:todoInput.value, isDone: false, priority: priority.value
        }
        data.push(todoData)
        addStorage(data)
    }
    
    const deleteTodo = (event) => {
        let id = event.target.closest(".todo").querySelector("p").innerText
        let newData = data.filter((todo) => todo.id != id)
        addStorage(newData)
        showTodos(addStorage())

    }

    addButton.addEventListener("click", () => {
        createTodo()
        showTodos(getStorage())
    })

    let data = getStorage()
    showTodos(data)