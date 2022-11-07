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
    font-size: 13em;
    cursor: pointer;
    margin-bottom: 50px;
    transition: font-size 2000ms 0ms;
  }

  .title.smaller {
    cursor: default;
    font-size: 11em;
  }
`;

export const FormContainer = styled.div<LoginFormProps>`
  height: ${({ visible }) => (visible ? "250px" : "0")};
  overflow: hidden;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: height 2000ms 0ms, opacity 2000ms 0ms;

`;
