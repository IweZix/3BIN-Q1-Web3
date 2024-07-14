export const Filter = ( { persons, setFilter } ) => {

    const handlerFilter = (event) => {    
        const foundPerson = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
        setFilter(foundPerson)
    }

    return (
        <div>
            filter shown with  <input onChange={handlerFilter} />
        </div>
    );
}
