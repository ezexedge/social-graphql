import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/client';
import Nav from './components/Nav';
import Home from './pages/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import CompleteRegistration from './pages/auth/CompleteRegistration';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Nav/>
      <ToastContainer />
      <Switch>

          <Route exact path="/" component={Home} />
            
           <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/complete-registration" component={CompleteRegistration} />

          </Switch>

    </ApolloProvider>
  );
};

export default App;
