import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './Components/REQs/serviceWorker';
import { StateProvider } from './Components/REQs/StateProvider'
import reducer, { initialState } from './Components/REQs/Reducer'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.querySelector('body')
);

serviceWorker.register();
