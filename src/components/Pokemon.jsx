import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';


export function Pokemon(props){

    const name=props.pokemon.name
    const [result,setResult]=useState([])
    
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response=>response.json())
        .then(data=>setResult(data))
    },[])

    return(
        <article className="card">
            <img className="card-image-top" src ={result.sprites?.front_default}/>
            <h3 className="card-title">{result.name}</h3>
 
            <div className="row">
                {result.types?.map((type,index)=>
                    <a key={index} href={type.type.url} className="col">{type.type.name} </a>
                )}
            </div>
            {result.stats?.map((stats,index)=>
                    <p key={index}>{stats.base_stat} : {stats.stat.name}</p>
                )} 
            <Link to={`/show/${result.name}`}>Show</Link>
        </article>
    )
}