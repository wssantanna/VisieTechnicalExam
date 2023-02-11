import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
// @shared
import MainRouter from './modules/shared/main.router';

import './assets/global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
    	<RouterProvider router={MainRouter} />
  	</React.StrictMode>,
);
