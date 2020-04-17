import React, { useState } from 'react';
import { connect } from 'react-redux';
import { characterRequest } from '../store/actions';

import './Form.scss';

const Form = props => {
    const [ nameInput, setNameInput ] = useState({ name: '' })

    const handleChange = e => {
        setNameInput({
            name: e.target.value
        })
    }

    const fetchNewCharacter = e => {
        e.preventDefault();
        // console.log(nameInput.name)
        props.characterRequest(nameInput.name)
    }

    const enterPressed= e => {
        if (!e) e = window.event;
        // console.log(e)
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13'){
          // Enter pressed
          fetchNewCharacter(e)
          return false;
        }
    }

    return (
        <div className='search-input'>
            <input 
                type='text'
                value={nameInput.name}
                onChange={handleChange}
                onKeyPress={enterPressed}
                placeholder='Enter a characer name...'
            />
            <button onClick={fetchNewCharacter}>Submit</button>
            {props.error && <p className="error">{props.error}</p>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
      error: state.characters.error
    }
  }

export default connect( mapStateToProps, { characterRequest } )( Form );