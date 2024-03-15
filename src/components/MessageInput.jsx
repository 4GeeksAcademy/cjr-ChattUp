import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { postMessage } from "@/services/postMessage";

export function MessageInput() {
  const [message, setMessage] = useState("");
  const post = useMutation({
    mutationFn: postMessage,
  });
  const queryClient = useQueryClient();

  const handleSend = () => {
    post.mutate(
      { message, author: "Ernesto" },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["messages"]);
          setMessage("");
        },
      }
    );
  };

  return (
    <div>
      <input value={message} onChange={(ev) => setMessage(ev.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
