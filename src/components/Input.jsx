import { useEffect, useState } from 'react'
import { Pokemon } from './Pokemon.jsx'
import { Link } from 'react-router-dom';

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
            <h1 className='fw-bold'>Search your Pokemon</h1>
            <div className='input-group mt-2'>
                <input className='form-control' onChange={handleChange}/>
                <Link className='btn btn-danger input-group-text' to={`/show/${search}`}>Show</Link>
            </div>

            {results.map((result,index)=>
                <Pokemon 
                    key={index}
                    pokemon={result}
                />
            )}

            
        </>

    )
}