import './components/todo/todo.css';
import ToDoNew from "./components/todo/ToDoNew.jsx";
import ToDoData from "./components/todo/ToDoData.jsx";
import reactLogo from './assets/react.svg'
import {useState} from "react";
const App = () => {
    const [todoList, setTodos] = useState([
        {id: 1, name: "Learning React"},
        {id: 2, name: "Watching Youtube"}
    ])
    const hoidanit = "Eric";
    const  age = 25;
    const data  = {
        address: "hanoi",
        country: "vietnam"

    }
    const addNewTodo = (name) => {
        alert(`call me ${name}`);
    }
    return (
        <>
            <div className={"todo-container"}>
                <div className={"todo-title"}>To do list</div>
                <ToDoNew
                    addNewTodo = {addNewTodo}
                />
                <ToDoData
                    name={hoidanit}
                    age = {age}
                    data = {data}
                    todoList = {todoList}
                />
                <div className={"todo-image"}>
                    <img className={"logo"} src={reactLogo}/>
                </div>
            </div>
        </>
    )
}
export default App