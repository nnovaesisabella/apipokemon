import React, { useEffect, useState } from 'react';
import './style.css'
// import Pica from '../images/pica.png'
import Api from '../service/api'

export const CardList = () => {

    const [pokemon, setPokemon] = useState([]);
    
    const allPokemon = async () => {
        await Api.get('/pokemon/')
            .then((res) => {
               setPokemon(res.data.results)
            })
            .catch((err) => {
                console.log(err);
            })
    }

     useEffect(() => {  
         allPokemon();
         
         
     }, [])

    return (
        <div className="pokedex">
            {pokemon.map((item, index) => 
            
                <div className="card-pokedex" key={index}>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${index +1}.png`} alt={item.name} />
                <h3> {item.name} </h3>
                </div>
        
            
            )}
           
        </div>
    )
}

