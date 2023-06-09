import './Message.scss';

function Message() {
  return (
    <div className="Message">
      <p className="Message-content">Message</p>
      <div>
        <button className="Message-button">Choice 1</button>
        <button className="Message-button">Choice 2</button>
      </div>
    </div>
  );
}

export default Message;
