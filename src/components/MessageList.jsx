import { getMessages } from "@/services/getMessages";
import { useQuery } from "@tanstack/react-query";

export function MessageList() {
  const messages = useQuery({
    queryKey: ["messages"],
    queryFn: getMessages,
    refetchOnWindowFocus: true,
    refetchInterval: 5000,
  });

  return (
    <div>
      {messages.data?.map((item, index) => (
        <div key={index}>
          <b>{item.author}</b> - {item.message}
        </div>
      ))}
    </div>
  );
}
