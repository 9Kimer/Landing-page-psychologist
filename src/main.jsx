import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import About from './components/about/About.jsx';
import Contacts from './components/contacts/Contacts.jsx';
import Education from './components/education/Education';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Price from './components/price/Price.jsx';
import './styles/global.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <div>404</div>,
	},
	{
		path: '/about-us',
		element: [<Header />, <About />, <Footer />],
	},
	{
		path: '/price',
		element: [<Header />, <Price />, <Footer />],
	},

	{
		path: '/contacts',
		element: [<Header />, <Contacts />, <Footer />],
	},

	{
		path: '/education',
		element: [<Header />, <Education />, <Footer />],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
