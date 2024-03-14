import ChatApp from "@/components/ChatApp"; // Ensure this import path is correct
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Container>
        <ChatApp /> {/* Rendering ChatApp */}
      </Container>
    </div>
  );
}
