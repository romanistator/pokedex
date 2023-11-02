import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Show() {
  const params = useParams();
  const name = params.name;
  const [result, setResult] = useState(null);
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [select,setSelect] = useState("")

  const choice =(event)=>setSelect(event.target.value)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
        setLoading(false);
      });
  }, [name]);

  useEffect(() => {
    if (result && result.sprites) {
      const spriteVersions = result.sprites.versions;
      const versionArray = [];

      for (const sprite in spriteVersions) {
        for (const version in spriteVersions[sprite]) {
          versionArray.push(version);
        }
      }

      setVersions(versionArray);
    }
  }, [result]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className='container'>
        <h3>Choose your version</h3>
        <select onChange={choice}>
            {versions.map((version, index) => 
                <option  key={index} value={index}>{version}</option>
            )}
        </select>

        <div>
      {result.sprites.front_default && (
        <img src={result.sprites.front_default} alt="Front Default" />
      )}
      {result.sprites.back_default && (
        <img src={result.sprites.back_default} alt="Back Default" />
      )}
      {result.sprites.front_shiny && (
        <img src={result.sprites.front_shiny} alt="Front Shiny" />
      )}
      {result.sprites.back_shiny && (
        <img src={result.sprites.back_shiny} alt="Back Shiny" />
      )}
      {result.sprites.front_female && (
        <img src={result.sprites.front_female} alt="Front Female" />
      )}
      {result.sprites.back_female && (
        <img src={result.sprites.back_female} alt="Back Female" />
      )}
      {result.sprites.front_shiny_female && (
        <img src={result.sprites.front_shiny_female} alt="Front Shiny Female" />
      )}
      {result.sprites.back_shiny_female && (
        <img src={result.sprites.back_shiny_female} alt="Back Shiny Female" />
      )}
    </div>
    <div className="row">
        {result.types?.map((type,index)=>
            <a key={index} href={type.type.url} className="col">{type.type.name} </a>
        )}
    </div>
    <div>
        {result.stats?.map((stats,index)=>
            <p key={index}>{stats.base_stat} : {stats.stat.name}</p>
        )} 
    </div>
    <div>
        {result.moves.map((move) =>  
            {move.version_group_details.map((group, groupIndex) => (
                console.log(group.version_group.name),
                console.log(select),
                select === "0" && group.version_group.name === "red-blue" && (
                    <p key={groupIndex}>{move.move.name}</p>
                )
            ))}
        )}
    </div>
  </section>
  )
}