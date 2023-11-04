import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

export function Move(props){
    const name = props.move;
    const [result, setResult] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/move/${name}`)
            .then(response => response.json())
            .then(data => setResult(data));
    }, [name]);

    if (result) {
        const effect_chance = result.damage_class.effect_chance;

        return (
            <tbody>
                {result.names.map((languages, index) => {
                    if (languages.language.name === "en") {
                        return (
                            <tr key={index}>
                                <td>
                                    <Link to={`/PokemonByMove/${result.id}`}>
                                        <h4>{languages.name}</h4>
                                    </Link>
                                </td>
                                <td>
                                    <p>{result.effect_entries[0].effect}</p>
                                </td>
                                <td>{result.damage_class.name}</td>
                                <td>{result.power ? `${result.power}` : '-'}</td>
                                <td>{result.pp ? `${result.pp}` : '-'}</td>
                                
                            </tr>
                        )
                    }
                })}
            </tbody>
        );

        
    } else {
        return null
    }
}