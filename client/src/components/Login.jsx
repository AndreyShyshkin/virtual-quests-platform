import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log("Logged in:", userCredential.user);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      {" "}
      <h2>Login</h2>{" "}
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />{" "}
        <button type="submit">Login</button>{" "}
      </form>{" "}
      {error && <p>{error}</p>}{" "}
    </div>
  );
};

export default Login;
