import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider';


const PrivateRoute = ({children}) => {
    const { user } = useContext(authContext);
		const location = useLocation();
		if (!user) {
			return (
				<Navigate to='/login' state={{ from: location }} replace></Navigate>
			);
		}
		return children;
      
};

export default PrivateRoute;