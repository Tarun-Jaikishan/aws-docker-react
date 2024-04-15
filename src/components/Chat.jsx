import { useState } from "react";

export default function Chat({ req, res }) {
  const [show, setShow] = useState(false);

  setTimeout(() => {
    setShow(true);
  }, 3000);

  return (
    <>
      <div className="chat chat-start">
        <div className="w-10 rounded-full bg-black text-white flex justify-center items-center py-2 mr-3 font-bold">
          G
        </div>
        <div className="chat-bubble">{req}</div>
      </div>
      {show ? (
        <>
          <div className="chat chat-end">
            <div className="chat-bubble">{res}</div>
            <div className="w-10 rounded-full bg-black text-white flex justify-center items-center py-2 ml-3 font-bold">
              B
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-end">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </>
  );
}
