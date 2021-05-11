import './Chat.css';

function Chat() {
  return (
    <div className="chat-container">
      <div className="match-list">
        <h3>Matches</h3>
        <div className="match-list-container">         
        </div>
      </div>
      <div className="chat-list">
        <h3>Messages</h3>
        <div className="chat-list-container">         
        </div>
      </div>
    </div>
  )
}

export default Chat;