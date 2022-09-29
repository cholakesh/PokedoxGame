import React, { Component } from 'react';
import Pokecard from './Pokecard'
import './Pokedex.css'
class Pokedex extends Component{
    
    render() {
        return(
            <div className='Pokedex' id={this.props.isWinner? 'winner':'loser'}>
                <h1 className={this.props.isWinner? 'Winner':'Loser'}> {this.props.isWinner?'Winner!!!!':'Losser!!!!!'}</h1>
                <h2>Total experience: {this.props.exp}</h2>
                <div className='Pokedex-Pokecard'>
                {this.props.pokemon.map(h=>(
                    <Pokecard id={h.id} name={h.name} type={h.type} base_experience={h.base_experience}/>
                ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;