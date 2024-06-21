import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import './components/hero.js';
import './components/header.js';
import './components/footer.js';
import '../scripts/components/restaurantItem.js';
import '../scripts/components/restaurantList.js';

import main from './view/main.js';

document.addEventListener('DOMContentLoaded', main);