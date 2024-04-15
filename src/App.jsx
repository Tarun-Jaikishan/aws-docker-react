import { useState } from "react";
import Chat from "./components/Chat";

export default function App() {
  const replies = ["Hello", "I am Fine", "Okay Good Bye"];

  const [chats, setChats] = useState([]);

  const [text, setText] = useState("");
  return (
    <div className="p-10">
      {/* Chats */}
      {chats.map((item, i) => {
        return <Chat req={item} res={replies[i % 3]} />;
      })}

      {/* Submit Text */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setChats([...chats, text]);
          setText("");
        }}
        className="flex justify-center items-center gap-5"
      >
        <input
          type="text"
          placeholder="Type a Message"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type="submit" className="btn btn-outline btn-success">
          Send
        </button>
      </form>
    </div>
  );
}
