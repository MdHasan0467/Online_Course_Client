import React, { useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithPopup, GithubAuthProvider, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.config';
import { createContext } from 'react';
import { useState } from 'react';

export const authContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const facebookProvider = new FacebookAuthProvider();
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();
	//!<===================================>
	//!<===================================>

	//! Create User....
	const createSignUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	//!......................................

	//! User profile....
	const userprofile = (name, photoURL) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photoURL,
		});
	};
	//!......................................

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log('user inside auth state change', currentUser);
			setUser(currentUser);
		});
		return () => {
			unSubscribe();
		};
	}, []);

	//! Log in....
	const logIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	//!......................................

	//! Google Log in....
	const googleSignUp = () => {
		return signInWithPopup(auth, googleProvider);
	};
	//!......................................

	//! Github Log in....
	const githubSignUp = () => {
		return signInWithPopup(auth, githubProvider);
	};
	//!......................................

	//! Facebook Log in....
	const facebookSignUp = () => {
		return signInWithPopup(auth, facebookProvider);
	};
	//!......................................

	//! LogOut...
	const logOut = () => {
		return signOut(auth);
	};
	//!......................................

	
	const authInfo = {
		user,
		createSignUp,
		userprofile,
		logIn,
		googleSignUp,
		githubSignUp,
		facebookSignUp,
		logOut,
	};
	return (
		<authContext.Provider value={authInfo}>{children}</authContext.Provider>
	);
};

export default AuthProvider;