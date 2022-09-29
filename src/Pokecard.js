import React,{Component} from 'react';
import './Pokecard.css'

const pockImg="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
class Pokecard extends Component{
    render(){
        var {id,name,type,base_experience}=this.props;
        let patNo=(number)=>(number<=999?`00${number}`.slice(-3):number);
        var imgSrc=`${pockImg}${patNo(id)}.png`;
        return(
            <div className='Pokecard'>
                    <h1 style={{color:'blue'}}>{name}</h1>
                    <div className='Pokecard-image'>
                        <img src={imgSrc} alt={name} />
                    </div>
                    <div>Type: {type}</div>
                    <div>Exp: {base_experience}</div>
            </div>
        )
    }
}

export default Pokecard;