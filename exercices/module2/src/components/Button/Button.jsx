export const Button = ({ changeCount, text, delta }) => {

  const handleClick = (e) => {
    const value = parseInt(e.target.dataset.delta);
    changeCount(value);
  }

  return (
    <button onClick={handleClick} data-delta={delta}>
      {text}
    </button>
  )
}