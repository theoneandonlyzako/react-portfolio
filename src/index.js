import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './service-worker';
import { HashRouter as Router } from 'react-router-dom';
import { OverlayScrollbars } from 'overlayscrollbars';
import 'overlayscrollbars/styles/overlayscrollbars.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// Themed overlay scrollbar — floats over the content (no reserved gutter) and
// auto-hides when idle. Initialized on <body> so native page scroll, the sticky
// navbar, scroll-to-top, and the lightbox all keep working.
OverlayScrollbars(document.body, {
  scrollbars: { theme: 'os-theme-dark', autoHide: 'move', autoHideDelay: 700 },
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
