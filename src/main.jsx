import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Show} from './pages/Show.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PokemonByMove } from './pages/PokemonByMove.jsx'
import { PokemonByCategories } from './pages/PokemonByCategories.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/show/:name",
    element:<Show/>
  },
  {
    path:"/PokemonByMove/:name",
    element:<PokemonByMove/>
  },
  {
    path:"/PokemonByCategories/:name",
    element:<PokemonByCategories/>
  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
