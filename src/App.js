import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Details from './components/Aside/Details/Details';
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Main from './layouts/Main/Main';

function App() {
  const router = createBrowserRouter([
		{
			path: '/',
			element: <Main></Main>,
			children: [
				{
					path: '/',
					element: <Home></Home>,
				},
				{
					path: '/home',
					element: <Home></Home>,
				},
				{
					path: '/blog',
					element: <Blog></Blog>,
				},
				{
					path: '/login',
					element: <Login></Login>,
				},
				{
					path: '/signup',
					element: <SignUp></SignUp>,
				},
				{
					path: '/courses',
					element: <Courses></Courses>,
					loader: () =>
						fetch(`https://assignment-ten-server-bice.vercel.app/courses`),
				},
				{
					path: '/course/:id',
					element: <Details></Details>,
					loader: ({ params }) =>
						fetch(
							`https://assignment-ten-server-bice.vercel.app/courses/${params.id}`
						),
				},
			],
		},
	]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
