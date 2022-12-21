import React from 'react';
import { createRoot } from 'react-dom/client';
import { store } from '~/redux/store';
import { Provider } from 'react-redux';
import '~/assets/css/index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
