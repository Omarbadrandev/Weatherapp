import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import HomeContainer  from './Containers/HomeContainer';

 //https://react-query.tanstack.com/reference/QueryClientProvider
 //https://www.section.io/engineering-education/react-query-data-fetching-and-server-state-management/
  const queryClient = new QueryClient()
  function App() {
  return (
    <QueryClientProvider client={queryClient}>
       <HomeContainer/>
    </QueryClientProvider>
    
  );
}

export default App;
