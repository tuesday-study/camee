import { combineReducers } from 'redux';
import FooterReducer from './reducer_footer';

const rootReducer = combineReducers({
  footer: FooterReducer
});

export default rootReducer;
