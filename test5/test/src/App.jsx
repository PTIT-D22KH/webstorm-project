import './components/todo/todo.css';
import ToDoNew from "./components/todo/ToDoNew.jsx";
import ToDoData from "./components/todo/ToDoData.jsx";
import reactLogo from './assets/react.svg'
const App = () => {
    return (
        <>
            <div className={"todo-container"}>
                <div className={"todo-title"}>To do list</div>
                <ToDoNew/>
                <ToDoData/>
                <div className={"todo-image"}>
                    <img className={"logo"} src={reactLogo}/>
                </div>
            </div>
        </>
    )
}
export default App