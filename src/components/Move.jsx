import { useEffect, useState } from "react"
import { ListPokemon } from "./ListPokemon"
import { Link } from 'react-router-dom';

export function Move(props){
    const name = props.move
    const [result,setResult]=useState()
    
    
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/move/${name}`)
        .then(response=>response.json())
        .then(data=>setResult(data))

    },[name])
    

    if(result){  
        const effect_chance = result.damage_class.effect_chance
        return(
            <div>  
                {result.names.map((languages,index)=>{
                    if(languages.language.name === "en"){ 
                        return(
                            <table key={index} className="table">
                             
                                <tbody>
                                    <tr>
                                        <th scope="row"><Link to={`/PokemonByMove/${result.id}`}><h4 key={index}>{languages.name}</h4></Link></th>
                                        <td><p>{result.effect_entries[0].effect}</p></td>
                                        <td>Damage : {result.damage_class.name}</td>
                                        {result.power && (
                                            <td>Power : {result.power}</td>
                                        )}
                                        {result.pp && (
                                            <td>PP : {result.pp}</td>
                                        )}
                                        
                                    </tr>
                                </tbody>

                            </table>
                        ) 
                    }  
                })}
            </div>
            
        )
    }

        
}