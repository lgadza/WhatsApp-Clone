import chatClosed from "../img/chatclosed.png";
import Avatar from "./Avatar";
const ClosedChat = () => {
  return (
    <div className="chat-closed d-flex flex-column align-items-center justify-content-center">
      <Avatar src={chatClosed} height={400} width={750} alt="chat_bg" />
      <span className="h2">WhatsApp Web</span>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <span>
          Send and receive messages without keeping your phone online.
        </span>
        <span>
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </span>
      </div>
    </div>
  );
};
export default ClosedChat;
