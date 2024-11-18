import { useState } from 'react';
import './Header.css';

function Header({ grouping, setGrouping, sorting, setSorting }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="display-dropdown" onClick={() => setIsOpen(!isOpen)}>
        <span className="display-icon">☰</span>
        <span>Display</span>
        <span className="dropdown-arrow">▼</span>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select 
              value={grouping} 
              onChange={(e) => setGrouping(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <span>Ordering</span>
            <select 
              value={sorting} 
              onChange={(e) => setSorting(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;