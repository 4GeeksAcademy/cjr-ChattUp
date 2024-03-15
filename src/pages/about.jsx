import Link from "next/link";
import { Container } from "react-bootstrap";

export default function About() {
  return (
    <Container>
      <p>Template created by Carlos Ramos for MDC 25 Awesome team</p>
      <Link href="/">Home</Link>
    </Container>
  );
}
