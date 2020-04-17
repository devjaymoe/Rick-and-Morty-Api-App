import { combineReducers } from 'redux';
import { charactersReducer as characters } from './charactersReducer';

export default combineReducers({ characters });