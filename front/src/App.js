import React, { useState, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/client';
import Nav from './components/Nav';
import Home from './pages/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import CompleteRegistration from './pages/auth/CompleteRegistration';
import { AuthContext } from './context/authContext';
import PrivateRoute from './components/PrivateRoute';
import PasswordForgot from './pages/auth/PasswordForgot';
import Profile from './pages/auth/Profile';
import Post from './pages/post/Post';
import PasswordUpdate from './pages/auth/PasswordUpdate';
import PublicRoute from './components/PublicRoute';
import Users from './pages/Users';
import SingleUser from './pages/SingleUser';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  const { state } = useContext(AuthContext);
  const { user } = state;
  
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    request: (operation) => {
      operation.setContext({
          headers: {
              authtoken: user ? user.token : ''
          }
      });
  }
  });
  
  return (
    <ApolloProvider client={client}>
      <Nav/>
      <ToastContainer />
      <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/user/:username" component={SingleUser} />
     
          <PublicRoute exact path="/register" component={Register} />
                <PublicRoute exact path="/login" component={Login} />
               <Route exact path="/complete-registration" component={CompleteRegistration} />
          <Route exact path="/password/forgot" component={PasswordForgot} />
          <PrivateRoute exact path="/password/update" component={PasswordUpdate} />
                <PrivateRoute exact path="/profile" component={Profile} />
                <PrivateRoute exact path="/post/create" component={Post} />
       
          </Switch>

    </ApolloProvider>
  );
};

export default App;
