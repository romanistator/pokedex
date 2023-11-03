import { Input } from './components/Input.jsx'
import './App.css'
import { ListPokemon } from './components/ListPokemon'

function App() {

  return(
    <div className="row">
      <Input/>
      <ListPokemon/>
    </div>
  ) 
}

export default App
