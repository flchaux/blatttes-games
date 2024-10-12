import React from 'react';
import logo from './logo.svg';
import './App.css';
import DraggableList from './DraggableList';
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { GameList } from './GameList';

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <GameList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
