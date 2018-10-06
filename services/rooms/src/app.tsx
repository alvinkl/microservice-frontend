import React = require('react');
import { hydrate } from 'react-dom';
import { RoomsSearch } from './Search';

export const App = hydrate(<RoomsSearch />, document.querySelector('#rooms-root'));
