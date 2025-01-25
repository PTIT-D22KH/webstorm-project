import {useState} from "react";

const ToDoNew = (props) => {
    // const valueInput = "Eric";
    const [valueInput, setValueInput] = useState("eric", );
    const {addNewTodo} = props;
    // addNewTodo("Eric");
    const handleClick = () => {
        console.log("Check valueInput: ", valueInput);
        // alert("Click me!");
    }
    const handleOnChange = (name) => {
        setValueInput(name);
    }
    return (
        <div className={"todo-new"}>
            <input
                type={"text"}
                placeholder={"Enter your task"}
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button
                style={{cursor: "pointer"}}
                onClick={handleClick}
            >
                Add
            </button>
            <div>
                My text input is = {valueInput}
            </div>
        </div>
    )
}
export default ToDoNew;