import { Person } from "components/Persons/Person";

export const Persons = ( { persons } ) => {
    return (
        <div>
            {
            persons.map(person => 
                <div key={person.name}>
                    <Person person={person} />
                </div>
            )
            }
        </div>
    );
}
