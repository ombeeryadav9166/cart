import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeALLItem, userLogin } from "../redux/action";

const Login = () => {
  const [value, setValue] = useState({});
  const [FormError, setFormError] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (value?.email.length > 0 && value?.password.length > 0) {
      if (
        value?.email.toLowerCase() === "admin@gmail.com" &&
        value?.password === "Abcd@1234"
      ) {
        dispatch(userLogin(true));
        dispatch(removeALLItem());

        navigate("/dashboard");
      } else {
        alert("Invalid email or password");
      }
    }

    setFormError({
      ...FormError,
      password: value?.password.length > 0 ? "" : "Password filed is required",
      email: value?.email.length > 0 ? "" : "Email filed is required",
    });
  };

  const inputChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="container mt-4">
        <div className="form-outline mb-4">
          <label className="form-label" for="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            value={value?.email}
            onChange={inputChange}
          />
          {FormError.email && <p className="error">{FormError.email}</p>}
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" for="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            name="password"
            value={value?.password}
            onChange={inputChange}
          />
          {FormError.password && <p className="error">{FormError.password}</p>}
        </div>
        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={() => handleSubmit()}
        >
          Sign in
        </button>
      </div>
    </>
  );
};

export default Login;
