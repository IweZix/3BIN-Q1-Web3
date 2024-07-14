export const Form = ( { addName, setNewName, setNewNumber } ) => {

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    
    const handleNumberChanger = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <form onSubmit={addName} >
                <div>
                    name: <input onChange={handleNameChange} />
                </div>
                <div>
                    number: <input onChange={handleNumberChanger} />
                </div>
                <div>
                    <button type="submit">
                        add
                    </button>
                </div>
            </form>
        </div>
    );
}
