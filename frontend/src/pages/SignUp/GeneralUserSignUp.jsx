import "./GeneralUserSignUp.css";
import back from "../../assets/back.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const GeneralUserSignUp = () => {
  const navigate = useNavigate();

  const BASE_URL = "http://localhost:5000";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleInitial, setMiddleInitial] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === password2) {
      axios
        .post(BASE_URL + "/api/generalUser", {
          email,
          password,
          firstName,
          lastName,
          middleInitial,
        })
        .then((response) => {
          setEmail("");
          setPassword("");
          setPassword2("");
          setFirstName("");
          setLastName("");
          setMiddleInitial("");

          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Password do not match!");
    }
  };

  return (
    <div className="publicSignUp">
      <div className="container">
        <h1>
          S<span>i</span>gn up
          <img
            src={back}
            alt="back"
            onClick={() => {
              navigate("/");
            }}
          />
        </h1>
        <span>As a public user, it's quick and easy</span>

        <form onSubmit={handleSubmit}>
          <div className="nameContainer">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="firstName"
              placeholder="First Name"
            />

            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="lastName"
              placeholder="Last Name"
            />

            <input
              value={middleInitial}
              onChange={(e) => setMiddleInitial(e.target.value)}
              type="text"
              className="initial"
              placeholder="M.I"
            />
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="email"
            placeholder="Email"
          />
          <div className="passwordContainer">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              className="newPassword"
              placeholder="New Password"
            />

            <input
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              type="text"
              className="re-enterPassword"
              placeholder="Re-enter New Password"
            />
          </div>
          <div className="checkbox-container">
            <input type="checkbox" name="showPassword" />
            <label htmlFor="showPassword">Show password</label>
          </div>
          <button className="signup">Sign Up</button>
          <p>
            By clicking Sign Up, you agree to our Terms, Privacy Policy and
            Cookies Policy.
          </p>
        </form>
      </div>
    </div>
  );
};
export default GeneralUserSignUp;
