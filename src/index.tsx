import React, { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import './index.css';

library.add(fab, fas, far);

const root = document.getElementById('root');

if (!root) {
  throw new Error('Could not find root element!');
}

const rootElement = createElement(() => {
  return (
    <App />
  );
});

createRoot(root).render(rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
