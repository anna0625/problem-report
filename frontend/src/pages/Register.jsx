import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { name, email, password, passwordConfirm } = formData;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess || user) {
      toast.success(message);
      navigate("/");
    }

    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [dispatch, isError, isSuccess, message, navigate, user]);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input
              id="name"
              type="text"
              placeholder="your name"
              name="name"
              defaultValue={name}
              className="form-control"
              onChange={changeHandler}
              required
            />
          </div>
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
            <input
              id="passwordConfirm"
              type="password"
              placeholder="password123"
              name="passwordConfirm"
              defaultValue={passwordConfirm}
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

export default Register;
