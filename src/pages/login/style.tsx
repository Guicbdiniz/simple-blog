import styled from "styled-components";
import { LoginFormProps } from "./form";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    color: ${({ theme }) => theme.colors.ImperialRed};
    font-size: 12em;
    cursor: pointer;
    margin-bottom: 50px;
  }
`;

export const FormContainer = styled.div<LoginFormProps>`
  height: ${({ visible }) => (visible ? "auto" : "0")};
  overflow: hidden;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: height 0ms 3000ms, opacity 1000ms 0ms;
`;
