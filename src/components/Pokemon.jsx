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
        <article className="rounded shadow card g-5 m-4  col-6 col-sm-4 col-md-2" >

            <img className="card-image-top" src ={result.sprites?.front_default}/>
            <div style={{height:"4em"}} className="row">
                {result.types?.map((type,index)=>   
                    <Link className="logo text-capitalize color-red col-1" key={index} to={`/PokemonByCategories/${type.type.name}`}><img style={{width:"25px"}} src={"../../public/images/" + type.type.name + ".png"}/></Link>   
                )}
            </div>
            <h4  className="card-title text-capitalize">{result.name}</h4>
 

    
            <Link className="btn btn-primary" to={`/show/${result.name}`}>Show</Link>
        </article>
    )
}