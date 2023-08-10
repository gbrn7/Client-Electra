import { Form } from 'react-bootstrap';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import EButton from '../../components/Button';

export default function Eform({
  form,
   isLoading,
   handleChange,
   handleSubmit
}) {

  return (
    <Form>
      <TextInputWithLabel 
      type={"email"}
      value={form.email}
      placeholder={"Enter Email"}
      name={"email"}
      label={"Email Address"}
      onChange={handleChange}
    />
      <TextInputWithLabel 
      type={"password"}
      value={form.password}
      placeholder={"Enter Password"}
      name={"password"}
      label={"Password"}
      onChange={handleChange}
      className={"mt-1"}
    />
    <div className="d-flex justify-content-center mt-3 login-form">
      <EButton action={handleSubmit} isLoading={isLoading} size="lg" classname="login-btn w-50">
        Sign in
      </EButton>
    </div>
    </Form>
  )
}
