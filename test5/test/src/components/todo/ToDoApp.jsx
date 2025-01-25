import {useState} from "react";
import ToDoNew from "./ToDoNew.jsx";
import ToDoData from "./ToDoData.jsx";
import './todo.css';
import reactLogo from "../../assets/react.svg";

const ToDoApp = () => {
    const [todoList, setTodoList] = useState([

    ])
    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 1000000),
            name: name
        }
        setTodoList([...todoList, newTodo])

    }
    const deleteTodo = (id) => {

        const newTodoList = todoList.filter((item) => item.id !== id);
        setTodoList(newTodoList)
    }
    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return (
        <>

            <div className={"todo-container"}>
                <div className={"todo-title"}>To do list</div>
                <ToDoNew
                    addNewTodo={addNewTodo}
                />
                {
                    todoList.length > 0 ?
                        <ToDoData
                            todoList={todoList}
                            deleteTodo={deleteTodo}
                        />
                        :
                        <div className={"todo-image"}>
                            <img className={"logo"} src={reactLogo}/>
                        </div>
                }

            </div>
        </>
    )
}
export default ToDoApp;