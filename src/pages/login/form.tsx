import React from "react";
import Button from "../../components/button";
import { TextInput } from "../../components/input";
import { FormContainer } from "./style";

export interface LoginFormProps {
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  visible: boolean;
  onSubmit?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { email, setEmail, password, setPassword, onSubmit, visible } = props;

  return (
    <FormContainer {...props}>
      <TextInput
        setText={(text) => {
          setEmail(text);
        }}
        text={email}
        type="email"
        shouldFocus={visible}
        onSubmit={onSubmit}
      />
      <TextInput
        setText={(text) => {
          setPassword(text);
        }}
        text={password}
        type="password"
        onSubmit={onSubmit}
      />
      <Button
        text="Login"
        onClick={() => {
          onSubmit && onSubmit();
        }}
      />
    </FormContainer>
  );
};

export default LoginForm;
