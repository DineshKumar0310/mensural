import { render } from 'preact/compat'; // Import render from preact/compat

import { App } from './app.jsx';
import './index.css';

render(<App />, document.getElementById('app'));
