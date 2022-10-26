import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Topics from './components/Topics/Topics';
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
					path: '/login',
					element: <Login></Login>,
				},
				{
					path: '/signup',
					element: <SignUp></SignUp>,
				},
				{
					path: '/courses',
					loader: () => fetch('http://localhost:5000/courses'),
					element: <Courses></Courses>,
				},

				{
					path: '/topics/:id',
					loader: ({ params }) =>
						fetch(`http://localhost:5000/courses/${params.id}`),
					element: <Topics></Topics>,
				},
					{
						path: '/course/checkout/:id',
						loader: ({ params }) =>
							fetch(
								`http://localhost:5000/courses/course/${params.id}`
							),
						element : <Checkout></Checkout>
					},

				{
					path: '/blog',
					element: <Blog></Blog>,
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
