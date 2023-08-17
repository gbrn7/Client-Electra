import { Form } from "react-bootstrap";
import Select from "react-select";

export default function ESelectBox({
  name,
  options,
  isClearable,
  placeholder,
  onChange,
  label,
  classname,
}) {
  return (
    <Form.Group className={classname}>
      {label && <Form.Label>{label}</Form.Label>}
      <Select
        name={name}
        isClearable={isClearable}
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={{ label: "Publish", value: "publish" }}
      />
    </Form.Group>
  );
}
