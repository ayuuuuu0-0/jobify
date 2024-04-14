import { Form, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow } from "../components";
import logo from "../assets/images/logo.svg";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  return null;
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <img src={logo} alt="Jobers Guild" className="logo" />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="john" />
        <FormRow
          type="text"
          name="lastname"
          labelText="last name"
          defaultValue="dhoni"
        />
        <FormRow type="text" name="location" defaultValue="chappra" />
        <FormRow type="email" name="email" defaultValue="johndhoni@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
