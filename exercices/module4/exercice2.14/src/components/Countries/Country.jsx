import { Weather } from "components/Weather/Weather"

export const Country = ( { country } ) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital[0]}</p>
            <p>population {country.population}</p>
            <h2>languages</h2>
            <ul>
                {Object.values(country.languages).map(l => <li key={l}>{l}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.name.common} width="100" />
            <Weather country={country} />
        </div>
    );
}
