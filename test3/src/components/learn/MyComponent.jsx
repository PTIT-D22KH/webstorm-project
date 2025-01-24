import './style.css';

const MyComponent = () => {
    return (
        <>
            <div>Hoi dan IT with Eric</div>
            <div className={"child"}
            style={
                {borderRadius: "10px"}
            }>Child</div>
        </>
    )
        ;
}

export default MyComponent;