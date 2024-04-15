export default function App() {
  return (
    <div>
      {/* Chats */}
      <div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <h1>ss</h1>
            </div>
          </div>
          <div className="chat-bubble">
            It was said that you would, destroy the Sith, not join them.
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <h1>ss</h1>
            </div>
          </div>
          <div className="chat-bubble">
            It was you who would bring balance to the Force
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <h1>ss</h1>
            </div>
          </div>
          <div className="chat-bubble">Not leave it in Darkness</div>
        </div>
      </div>
      {/* Submit Text */}
      <div className="flex justify-center items-center gap-5">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-outline btn-success">Send</button>
      </div>
    </div>
  );
}
