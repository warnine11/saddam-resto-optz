/* eslint-disable */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import './views/custom-elemen/hero';
import './views/custom-elemen/footer';
import './views/custom-elemen/header';
import swRegister from './utils/sw-register';
import App from './views/app';


document.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('#drawer'),
    hero: document.querySelector('hero-section'),
    content: document.querySelector('#maincontent'),
  });

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });
});
