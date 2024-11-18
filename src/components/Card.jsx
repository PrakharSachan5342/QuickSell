import './Card.css';

function Card({ ticket }) {
  const priorityIcons = {
    4: '!!!',
    3: '!!',
    2: '!',
    1: '↓',
    0: '---'
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <div className="avatar">{ticket.assignee.charAt(0)}</div>
      </div>
      <h3 className="card-title">{ticket.title}</h3>
      <div className="card-footer">
        <span className="priority-icon">{priorityIcons[ticket.priority]}</span>
        <div className="tag">
          <span>•</span>
          <span>{ticket.tag[0]}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;