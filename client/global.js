import { createBrowserHistory } from 'history';
import { createClient } from './apollo.js';

export const history = createBrowserHistory();
export const client = createClient();
