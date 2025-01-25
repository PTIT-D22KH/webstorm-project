import './components/todo/todo.css';
import ToDoNew from "./components/todo/ToDoNew.jsx";
import ToDoData from "./components/todo/ToDoData.jsx";
import reactLogo from './assets/react.svg'
import {useState} from "react";
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";
import {Outlet} from "react-router-dom";
const App = () => {
    const [todoList, setTodoList] = useState([
        // {id: 1, name: "Learning React"},
        // {id: 2, name: "Watching Youtube"}
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
            <Header/>
            <div className={"todo-container"}>
                <div className={"todo-title"}>To do list</div>
                <ToDoNew
                    addNewTodo = {addNewTodo}
                />
                {
                    todoList.length > 0 ?
                        <ToDoData
                            todoList={todoList}
                            deleteTodo = {deleteTodo}
                        />
                        :
                        <div className={"todo-image"}>
                            <img className={"logo"} src={reactLogo}/>
                        </div>
                }

            </div>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default App