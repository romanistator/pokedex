import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

export function Evolve(props) {
    const [species, setSpecies] = useState(null);
    const [result, setResult] = useState(null);
    const idSpecies = props.id;
  
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${idSpecies}`)
        .then(response => response.json())
        .then(data => {
          setSpecies(data);
          const idChain = data.evolution_chain.url;
          fetch(idChain)
            .then(response => response.json())
            .then(data => setResult(data));
        });
    }, [idSpecies]);
  
    if (result && species) {
        const evoTwo = result.chain.evolves_to.map((evolve) => {
          return evolve.evolves_to.map((evolveTwo) => {
            return (
              <Link to={`/Show/${evolveTwo.species.name}`} className="text-capitalize" key={evolveTwo.species.name}>
                {evolveTwo.species.name}
              </Link>
            )
          })
        })
        const evoFour = result.chain.evolves_to.map((evolve)=>{
            return evolve.evolves_to.map((evolveTwo)=>{
                return evolveTwo.evolves_to.map((evolveFour)=>{
                    return(
                        <Link to={`/Show/${evolveFour.species.name}`} className="text-capitalize" key={evolveFour.species.name}>
                            {evolveFour.species.name}
                        </Link>
                    )
                })
            })
        })     
        return (
          <div>
            <h4>Evolutions</h4>
            {result.chain.evolves_to.map((evolve, index) => {
              return (
                <div key={evolve.species.name}>
                    <Link to={`/Show/${result.chain.species.name}`} className="text-capitalize" key={result.chain.species.name}>
                        {result.chain.species.name}
                    </Link>
                    <br/>
                    <Link to={`/Show/${evolve.species.name}`} className="text-capitalize" key={evolve.species.name}>
                        {evolve.species.name}
                    </Link>
                    <br/>
                    {evoTwo[index]}
                    <br/>
                    {evoFour[index]}
                </div>
              );
            })}
          </div>
        );
      }
      
}
