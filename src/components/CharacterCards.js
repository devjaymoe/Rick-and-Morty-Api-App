import React from 'react';
import { connect } from 'react-redux';
import { characterRequest } from '../store/actions';

import './CharacterCards.scss';

const CharacterCards = props => {
    return (
        <div className='card-container'>
            {props.characters.map(character => (
                <div className='character-card' key={character.id}>
                    <h3>{character.name}</h3>
                    <img src={character.image} alt={character.name} />
                    <div className='info'>
                        <div>
                            <p>STATUS</p> <p>{character.status}</p>
                        </div>
                        <div>
                            <p>SPECIES</p> <p>{character.species}</p>
                        </div>
                        <div>
                            <p>GENDER</p> <p>{character.gender}</p>
                        </div>
                        <div>
                            <p>TYPE</p> <p>{character.type}</p>
                        </div>
                        <div>
                            <p>ORIGIN</p> <p>{character.origin.name}</p>
                        </div>
                        <div>
                            <p>LOCATION</p> <p>{character.location.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
      characters: state.characters.characters,
    }
  }

export default connect( mapStateToProps, { characterRequest })( CharacterCards );