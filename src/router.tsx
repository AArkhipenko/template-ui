import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DefaultPage } from './pages/default-page';

/**
 * Компонент навигации по страницам
 */
export const Router: React.FC = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <DefaultPage />,
		},
	]);

	return (
		<RouterProvider
			router={router}
		/>
	);
}
