import { useEffect, useState } from 'react'
import{Pokemon} from './Pokemon.jsx'
export function ListPokemon(){

    const[results,setResults]=useState([])
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100/")
        .then(response=>response.json())
        .then(data=>setResults(data.results))
        
    },[])
  
    return(
        <div className='container'>
            <img src="../../public/images/9cb92b028995c2ec079451c300efde51.png"/>
            <div  className="row">
                {results.map((result,index)=>
                    <Pokemon 
                        key={index}
                        pokemon={result}
                    />
                )}
            </div>

        </div>
        

    )

    
}