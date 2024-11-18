import { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board';
import Header from './components/Header';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setTickets(data.tickets);
        setUsers(data.users);
      });
  }, []);

  return (
    <div className="app">
      <Header 
        grouping={grouping} 
        setGrouping={setGrouping}
        sorting={sorting}
        setSorting={setSorting}
      />
      <Board 
        tickets={tickets}
        users={users}
        grouping={grouping}
        sorting={sorting}
      />
    </div>
  );
}

export default App;