import { Country } from "components/Countries/Country";

export const Countries = ( { countries, setSortedCountries } ) => {

    const handleClick = (e) => {
        const name = e.target.getAttribute('data-name');
        const country = countries.find(c => c.name.common === name);
        setSortedCountries([country]);
    }

    if (countries.length === 0) {
        return (
            <div>
                no matches
            </div>
        );
    }

    if (countries.length === 1) {
        return (
            <Country country={countries[0]} />
        );
    }

    if (countries.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        );
    }

    return (
        <div>
            {
                countries.map(c => 
                    <p key={c.name.common}>
                        {c.name.common} <button data-name={c.name.common} onClick={handleClick} >show</button>
                    </p>
                )
            }
        </div>
    );
}
