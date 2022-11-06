import React, { useRef, useState } from "react";
import LoginForm from "./form";
import { LoginContainer } from "./style";

interface Props {}

const Login: React.FC<Props> = () => {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginContainer>
      <h1
        className="title"
        onClick={() => {
          if (!formIsVisible) {
            setFormIsVisible(true);
          }
        }}
      >
        Simple Blog
      </h1>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        visible={formIsVisible}
        onSubmit={() => {}}
      />
    </LoginContainer>
  );
};

export default Login;
