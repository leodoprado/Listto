import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from '../src/core/globalStyles'

const root = ReactDOM.render(<App />, document.getElementById('root'));

root.render(
    <React.StrictMode>
        <GlobalStyles />
    </React.StrictMode>
);

