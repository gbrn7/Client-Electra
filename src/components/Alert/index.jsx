import { Alert } from "react-bootstrap";

function EAlert({ message, type }) {
  const err = message.split(",");

  return (
    <Alert variant={type}>
      <ul>
        {err.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </Alert>
  );
}

export default EAlert;
