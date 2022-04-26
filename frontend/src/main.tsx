import ReactDOM from 'react-dom/client';
import './styles/global-styles.scss';

import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import { compose, applyMiddleware, createStore } from 'redux';
import App from './App';
import rootReducers from './store/reducers';

const store = createStore(rootReducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
