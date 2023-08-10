import { Alert } from "react-bootstrap";

function EAlert({ message, type }) {
  return (<Alert variant={type}>{message}</Alert>);
}

export default EAlert;