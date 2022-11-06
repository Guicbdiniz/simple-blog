import styled from "styled-components";

export const TextInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;

  input {
    padding: 16px;
    background: transparent;
    /* border: 2px solid ${({ theme }) => theme.colors.PrussianBlue}; */
    border: none;
    color: ${({ theme }) => theme.colors.PrussianBlue};
    font-size: 2em;

    :focus {
      outline: none;
      border-bottom: 2px solid ${({ theme }) => theme.colors.PrussianBlue};
    }
  }
`;
