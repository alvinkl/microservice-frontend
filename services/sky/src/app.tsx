import React = require('react');
import { hydrate } from 'react-dom';
import { SkySearch } from './search';

export const search = hydrate(<SkySearch />, document.querySelector('#fragment-sky-root'));
