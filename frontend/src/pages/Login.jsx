import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaSignInAlt } from "react-icons/fa";
import { userSelector, useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />
          Login
        </h1>
        <p>Please login to report problems</p>
      </section>
      <section className="form">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input
              id="email"
              type="email"
              placeholder="your.email@gamil.com"
              name="email"
              defaultValue={email}
              className="form-control"
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <input
              id="password"
              type="password"
              placeholder="password123"
              name="password"
              defaultValue={password}
              className="form-control"
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
