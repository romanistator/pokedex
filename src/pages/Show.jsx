import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Move } from '../components/Move';
import { Link } from 'react-router-dom';
import { Evolve } from '../components/Evolve'
import { Navbar } from '../components/Navbar';

export function Show() {
  const params = useParams();
  const name = params.name;
  const [result, setResult] = useState(null);
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [select,setSelect] = useState("0")

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
  const tableHeader = (
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Effect</th>
            <th scope="col">Damages</th>
            <th scope="col">Power</th>
            <th scope="col">PP</th>
        </tr>
    </thead>
)

  return (
    <>
    <Navbar/>
    <section className='show container bg-light'>
      
      <h1 className='text-capitalize'>{result.name}</h1>
        <h3>Choose your version</h3>
        <select onChange={choice}>
            {versions.map((version, index) => 
              
                <option  key={index} value={index}>{version}</option>
            )}
        </select>
        <div className='row'>
          <Evolve className="col" id={result.id}/>
        </div>
        <div>
        {result.sprites.front_default && (
          <div>
            <p>Male</p>
            <img src={result.sprites.front_default} alt="Front Default" />
            <img src={result.sprites.back_default} alt="Back Default" />
          </div>
   
        )}
        {result.sprites.front_shiny && (
          <div>
            <p>Shiny Male</p>
            <img src={result.sprites.front_shiny} alt="Front Shiny" />
            <img src={result.sprites.back_shiny} alt="Back Shiny" />
          </div>
        )}
        {result.sprites.front_female && (
          <div>
            <p>Female</p>
            <img src={result.sprites.front_female} alt="Front Female" />
            <img src={result.sprites.back_female} alt="Back Female" />
          </div>
        )}
        {result.sprites.front_shiny_female && (
          <div>
            <p>Shiny Female</p>
            <img src={result.sprites.front_shiny_female} alt="Front Shiny Female" />
            <img src={result.sprites.back_shiny_female} alt="Back Shiny Female" />
          </div>
        )}
    </div>
    <div className="row">
        {result.types?.map((type,index)=>
            <Link key={index} to={`/PokemonByCategories/${type.type.name}`}>{type.type.name}</Link>
        )}
    </div>
    <div>
        {result.stats?.map((stats,index)=>
            <p key={index}>{stats.base_stat} : {stats.stat.name}</p>
        )} 
    </div>
    
    <div className='row'>
    <table className="custom-table">
    {tableHeader}
      {result.moves.map((move) => {
          return move.version_group_details.map((group, groupIndex) => {
            if (select === "0" && group.version_group.name === "red-blue") {
              return <Move key={groupIndex} move={move.move.name}/>
            } else {
              return null
            }
          })
        })}
      {result.moves.map((move) => {
        return move.version_group_details.map((group, groupIndex) => {
          if (select === "1" && group.version_group.name === "yellow") {
            return <Move key={groupIndex} move={move.move.name}/>
          } else {
            return null
          }
        })
      })}
      {result.moves.map((move) => {
        return move.version_group_details.map((group, groupIndex) => {
          if (select === "3" && group.version_group.name === "crystal") {
            return <Move key={groupIndex} move={move.move.name}/>
          } else {
            return null
          }
        })
      })}
      {result.moves.map((move) => {
        return move.version_group_details.map((group, groupIndex) => {
          if (select === "4" && group.version_group.name === "gold-silver") {
            return <Move key={groupIndex} move={move.move.name}/>
          } else {
            return null
          }
        })
      })}
      {result.moves.map((move) => {
        return move.version_group_details.map((group, groupIndex) => {
          if (select === "5" && group.version_group.name === "gold-silver") {
            return <Move key={groupIndex} move={move.move.name}/>
          } else {
            return null
          }
        })
      })}
      {result.moves.map((move) => {
        return move.version_group_details.map((group, groupIndex) => {
          if (select === "6" && group.version_group.name === "emerald") {
            return <Move key={groupIndex} move={move.move.name}/>
          } else {
            return null
          }
        })
      })}
      {result.moves.map((move) => {
        return move.version_group_details.map((group, groupIndex) => {
          if (select === "7" && group.version_group.name === "firered-leafgreen") {
            return <Move key={groupIndex} move={move.move.name}/>
          } else {
            return null
          }
        })
      })}
      {result.moves.map((move) => {
        return move.version_group_details.map((group, groupIndex) => {
          if (select === "8" && group.version_group.name === "ruby-sapphire") {
            return <Move key={groupIndex} move={move.move.name}/>
          } else {
            return null
          }
        })
      })}
      {result.moves.map((move) => {
        return move.version_group_details.map((group, groupIndex) => {
          if (select === "9" && group.version_group.name === "diamond-pearl") {
            return <Move key={groupIndex} move={move.move.name}/>
          } else {
            return null
          }
        })
      })}
      {result.moves.map((move) => {
        return move.version_group_details.map((group, groupIndex) => {
          if (select === "10" && group.version_group.name === "heartgold-soulsilver") {
            return <Move key={groupIndex} move={move.move.name}/>
          } else {
            return null
          }
        })
      })}
      {result.moves.map((move) => {
        return move.version_group_details.map((group, groupIndex) => {
          if (select === "11" && group.version_group.name === "platinum") {
            return <Move key={groupIndex} move={move.move.name}/>
          } else {
            return null
          }
        })
      })}
      {result.moves.map((move) => {
        return move.version_group_details.map((group, groupIndex) => {
          if (select === "12" && group.version_group.name === "black-white") {
            return <Move key={groupIndex} move={move.move.name}/>
          } else {
            return null
          }
        })
      })}
      {result.moves.map((move) => {
        return move.version_group_details.map((group, groupIndex) => {
          if (select === "13" && group.version_group.name === "omega-ruby-alpha-sapphire") {
            return <Move key={groupIndex} move={move.move.name}/>
          } else {
            return null
          }
        })
      })}
      {result.moves.map((move) => {
        return move.version_group_details.map((group, groupIndex) => {
          if (select === "14" && group.version_group.name === "x-y") {
            return <Move key={groupIndex} move={move.move.name}/>
          } else {
            return null
          }
        })
      })}
      {result.moves.map((move) => {
        return move.version_group_details.map((group, groupIndex) => {
          if (select === "15" && group.version_group.name === "icons") {
            return <Move key={groupIndex} move={move.move.name}/>
          } else {
            return null
          }
        })
      })}
      {result.moves.map((move) => {
        return move.version_group_details.map((group, groupIndex) => {
          if (select === "16" && group.version_group.name === "ultra-sun-ultra-moon") {
            return <Move key={groupIndex} move={move.move.name}/>
          } else {
            return null
          }
        })
      })}
      {result.moves.map((move) => {
        return move.version_group_details.map((group, groupIndex) => {
          if (select === "17" && group.version_group.name === "icons") {
            return <Move key={groupIndex} move={move.move.name}/>
          } else {
            return null
          }
        })
      })}
      </table>
    </div>
  </section>
    </>
    
  )
}