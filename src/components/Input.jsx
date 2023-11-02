import { useEffect, useState } from 'react'
import { Pokemon } from './Pokemon.jsx'

export function Input(){

    const [search,setSearch]=useState('')
    const [results,setResults]=useState([])
    
    const handleChange=(event)=>{
        setSearch(event.target.value)

    }
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then(response=>response.json())
        .then(data=>setResults(data.results))

    },[])
    return(
        <>
            <input/>
            <button onClick={handleChange}>Search</button>
            {results.map((result,index)=>
                <Pokemon 
                    key={index}
                    pokemon={result}
                />
            )}

            
        </>

    )
}