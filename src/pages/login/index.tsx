import React, { useRef, useState } from "react";
import LoginForm from "./form";
import { LoginContainer } from "./style";

interface Props {}

const Login: React.FC<Props> = () => {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [titleClasses, setTitleClasses] = useState<"title" | "title smaller">(
    "title"
  );

  return (
    <LoginContainer>
      <h1
        className={titleClasses}
        onClick={() => {
          if (!formIsVisible) {
            setFormIsVisible(true);
            setTitleClasses("title smaller");
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
