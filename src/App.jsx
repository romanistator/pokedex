import { Input } from './components/Input.jsx'
import './App.css'
import { ListPokemon } from './components/ListPokemon'
import { Navbar } from './components/Navbar.jsx'

function App() {

  return(
    <>
      <Navbar/>
      <div className="row">
        <div className='imgAccueil'>
          <article className='article mt-5'>
            <p>Bienvenue sur le Pokédex, votre source ultime d'informations sur les Pokémon ! Notre site est dédié à vous fournir des détails complets sur toutes les créatures fantastiques de l'univers Pokémon.</p>
            <p>Que vous soyez un dresseur débutant ou un vétéran chevronné, notre Pokédex vous permettra de tout savoir sur les capacités, les caractéristiques, les évolutions et bien plus encore de vos Pokémon préférés.</p>
            <p>Explorez notre vaste base de données de Pokémon, recherchez des informations spécifiques sur un Pokémon en particulier ou laissez-vous inspirer en découvrant de nouveaux compagnons pour votre équipe. Notre objectif est de vous aider à devenir le meilleur dresseur possible !</p>
            <p>N'hésitez pas à parcourir notre site, découvrez des anecdotes intéressantes, des illustrations magnifiques et des informations utiles sur chaque Pokémon. Profitez de votre voyage à travers le monde des Pokémon, et que l'aventure commence !</p>
          </article>
        </div>
        

        <ListPokemon/>
        
      </div>
    </>
    
  ) 
}

export default App
