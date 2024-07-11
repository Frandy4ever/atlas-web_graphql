import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AddProject from './components/AddProject';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Project Management</h1>
        <AddProject />
        <AddTask />
        <TaskList />
      </div>
    </ApolloProvider>
  );
}

export default App;
