const ToDoData = (props) => {
    const {todoList, deleteTodo} = props;
    const handleDeleteOnclick = (id) => {
        deleteTodo(id);
    }
    return (
        <div className={"todo-data"}>
            {todoList.map((item, index) => {
                console.log("Check map: ", item, index);
                return (
                    <div className={"todo-item"} key={item.id}>
                        <div>
                            {item.name}
                        </div>
                        <button
                            onClick={() => {
                                handleDeleteOnclick(item.id)
                            }
                            }
                            style={{cursor: "pointer"}}
                        >Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
export default ToDoData;