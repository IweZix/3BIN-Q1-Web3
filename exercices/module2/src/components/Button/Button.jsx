const Button = ({ changeCount, text, delta }) => {

    const handleClick = (e) => {
        const target = e.target.dataset.delta;
        const delta = parseInt(target);
        changeCount(delta);
    }

    return (
        <button onClick={handleClick} data-delta={delta}>
            {text}
        </button>
    );
};

export default Button;