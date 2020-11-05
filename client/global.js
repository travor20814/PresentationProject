import { createBrowserHistory } from 'history';
import { createClient } from './apollo';

export const history = createBrowserHistory();
export const client = createClient();
