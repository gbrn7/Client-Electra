import {Form} from 'react-bootstrap';

function TextInputWithLabel({
  label,
  name,
  value,
  type,
  onChange,
  placeholder,
  className
}) {
  return (
    <Form.Group className={className}>
      <Form.Label>{label}</Form.Label>
      <Form.Control 
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      />
    </Form.Group>
  );
}

export default TextInputWithLabel;