import { useMemo } from 'react';
import './Board.css';
import Card from './Card';

const priorityLabels = {
  4: 'Urgent',
  3: 'High',
  2: 'Medium',
  1: 'Low',
  0: 'No priority'
};

const statusIcons = {
  'Todo': '○',
  'In Progress': '◐',
  'Done': '●',
  'Canceled': '⊘'
};

function Board({ tickets, users, grouping, sorting }) {
  const groupedTickets = useMemo(() => {
    let groups = {};
    
    if (grouping === 'status') {
      groups = {
        'Todo': [],
        'In Progress': [],
        'Done': [],
        'Canceled': []
      };
    } else if (grouping === 'user') {
      users.forEach(user => {
        groups[user.name] = [];
      });
    } else if (grouping === 'priority') {
      groups = {
        'Urgent': [],
        'High': [],
        'Medium': [],
        'Low': [],
        'No priority': []
      };
    }

    tickets.forEach(ticket => {
      let key;
      if (grouping === 'status') {
        key = ticket.status;
      } else if (grouping === 'user') {
        key = ticket.assignee;
      } else if (grouping === 'priority') {
        key = priorityLabels[ticket.priority];
      }

      if (groups[key]) {
        groups[key].push(ticket);
      }
    });

    Object.keys(groups).forEach(key => {
      groups[key].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return groups;
  }, [tickets, users, grouping, sorting]);

  return (
    <div className="board">
      {Object.entries(groupedTickets).map(([group, tickets]) => (
        <div key={group} className="board-column">
          <div className="column-header">
            <div className="column-header-left">
              <span className={`status-icon ${group.toLowerCase().replace(' ', '-')}`}>
                {statusIcons[group] || '○'}
              </span>
              <span className="column-title">{group}</span>
              <span className="ticket-count">{tickets.length}</span>
            </div>
            <span className="column-actions">...</span>
          </div>
          <div className="column-content">
            {tickets.map(ticket => (
              <Card key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Board;