import { Form } from "react-bootstrap";

export default function ETextArea({
  className,
  rows,
  label,
  placeHolder,
  name,
  onChange,
}) {
  return (
    <Form.Group className={className} controlId="exampleForm.ControlTextarea1">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="textarea"
        rows={rows ? rows : 3}
        placeholder={placeHolder}
        name={name}
        onChange={onChange}
      />
    </Form.Group>
  );
}
