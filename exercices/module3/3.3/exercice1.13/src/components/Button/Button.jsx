export const Button = ( { handler, text } ) => {
    return (
        <div>
            <button onClick={handler} >{text}</button>
        </div>
    );
}