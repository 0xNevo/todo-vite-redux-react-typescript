import * as React from "react"
import ReactDOM from 'react-dom/client'
import { createStore, applyMiddleware, Store, compose } from "redux"
import { Provider } from "react-redux";
import thunk from "redux-thunk"

import App from "./App"
import reducer from "./store/reducer"

import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancer = compose(applyMiddleware(thunk), composeWithDevTools());

const store: Store<ArticleState, ArticleAction> & {
	dispatch: DispatchType
} = createStore(reducer, composeEnhancer);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
)