const ToDoData = (props) => {
    // console.log(">>>> check props: ", props);
    const {hoidanit, name, data} = props;
    return (
        <div className={"todo-data"}>
            <div>My name is {hoidanit}, I am {name}, and my data: {JSON.stringify(data)}</div>
            <div>Learning React</div>
        </div>
    )
}
export default ToDoData;