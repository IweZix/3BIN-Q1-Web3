import { useContext } from "react";
import { JokesContext } from "contexts/JokesContext";

export const Jokes = () => {
    const { jokes, updateJokeState } = useContext(JokesContext);

    const handleImageUrlChange = (e, jokeId) => {
        const newimageUrl = e.target.value;
        updateJokeState(jokeId, newimageUrl);
    }
    

    return (
        <div>
            <h1>Famous Jokes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>jokes</th>
                        <th>imageUrl</th>
                    </tr>
                </thead>
                <tbody>
                    {jokes.map((joke) => (
                        <tr key={joke.id}>
                            <td>{joke.name}</td>
                            <td>{joke.joke}</td>
                            <td>
                                <input 
                                        type="text" 
                                        value={joke.imageUrl} 
                                        onChange={(e) => handleImageUrlChange(e, joke.id)}
                                />
                                <button onClick={() => updateJokeState(joke.id, joke.state)}>Mettre à jour</button>
                            </td>
                            <td>
                                <img src={joke.imageUrl} alt="{joke.name}" height={200} width={200} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
