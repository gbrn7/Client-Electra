import { Figure, Form } from "react-bootstrap";
import ETextInputWithLabel from "../../components/TextInputWithLabel";
import ETextArea from "../../components/ETextArea";
import ESelectBox from "../../components/ESelectBox";
import EButton from "../../components/Button";

export default ({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
  isClearable,
  options,
  btnClassname,
  thumbVal,
}) => {
  return (
    <Form>
      <ETextInputWithLabel
        className={"mb-2"}
        placeholder={"Input product name"}
        label={"Product name"}
        name={"name"}
        value={form.name}
        type={"text"}
        onChange={handleChange}
      />
      <ETextInputWithLabel
        className={"mb-2"}
        placeholder={"Input product price"}
        label={"Product price"}
        name={"price"}
        value={form.price}
        type={"number"}
        onChange={handleChange}
      />
      <ETextInputWithLabel
        className={"mb-2"}
        placeholder={"Input product weight"}
        label={"Product weight (Kg)"}
        name={"weights"}
        value={form.weights}
        type={"number"}
        onChange={handleChange}
      />
      <ETextInputWithLabel
        className={"mb-2"}
        placeholder={"Input product stock"}
        label={"Product stock"}
        name={"stock"}
        value={form.stock}
        type={"number"}
        onChange={handleChange}
      />
      <ETextArea
        placeHolder={"Input product desc"}
        label={"Product desc"}
        name={"desc"}
        value={form.desc}
        type={"text"}
        onChange={handleChange}
        className={"mb-2"}
      />
      <ESelectBox
        label={"Product status"}
        placeholder={"Choose product status"}
        name={"status"}
        options={options}
        isClearable={isClearable}
        value={form.status}
        onChange={handleChange}
      />
      <ETextInputWithLabel
        className={"mb-2"}
        placeholder={"Input product thumbnail"}
        label={"Product thumbnail"}
        name={"thumbnail"}
        value={form.weight}
        type={"file"}
        onChange={handleChange}
      />
      {form.thumbnail && (
        <div>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171*180"
              src={thumbVal}
            />

            <Figure.Caption>Thumbnail Preview</Figure.Caption>
          </Figure>
        </div>
      )}
      <EButton
        variant={"primary"}
        action={handleSubmit}
        isLoading={isLoading}
        classname={btnClassname}
      >
        {edit ? "Edit" : "Save"}
      </EButton>
    </Form>
  );
};
