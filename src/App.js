import React from 'react';
import List from './components/list';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//apollo client setup

const client = new ApolloClient({
  uri: 'https://react.eogresources.com/graphql'
})

function App() {
  console.log(client)
  return (
  <ApolloProvider client={client}>
    <div id="main">
      <h1> Arlisha List </h1>
      <List />
    </div>
  </ApolloProvider>
  );
}

export default App;
