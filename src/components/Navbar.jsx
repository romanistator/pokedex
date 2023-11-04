 import { useEffect, useState } from 'react'
 import { Link } from 'react-router-dom';

 export function Navbar(){
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
        <nav class="navbar navbar-expand-lg bg-dark fixed-top">
            <div class="container-fluid">
                <img src="../../public/images/International_Pokémon_logo.svg"/>
                <button class="navbar-toggler bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to={'/'} class="nav-link text-light active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input className='form-control' onChange={handleChange}/>
                        <Link className='btn btn-danger input-group-text' to={`/show/${search}`}>Show</Link>
                    </form>
                </div>
            </div>
        </nav>
    )
 }