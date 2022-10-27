import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Details from './components/Aside/Details/Details';
import Blog from './components/Blog/Blog';
import Checkout from './components/Checkout/Checkout';
import Contact from './components/Contact/Contact';
import Courses from './components/Courses/Courses';
import Error from './components/Error/Error';
import FAQ from './components/FAQ/FAQ';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
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
					path: '/faq',
					element: <FAQ></FAQ>,
				},
				{
					path: '/contact',
					element: <Contact></Contact>,
				},
				{
					path: '*',
					element: <Error></Error>,
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
					element:<Details></Details>,
					loader: ({ params }) =>
						fetch(
							`https://assignment-ten-server-bice.vercel.app/course/${params.id}`
						),
				},
				{
					path: '/course/checkout/:id',
					element: (
						<PrivateRoute>
							<Checkout></Checkout>
						</PrivateRoute>
					),
					loader: ({ params }) =>
						fetch(
							`https://assignment-ten-server-bice.vercel.app/course/${params.id}`
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
