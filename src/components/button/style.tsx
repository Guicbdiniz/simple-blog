import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  color: ${({ theme }) => theme.colors.PrussianBlue};
  border-radius: 24px;
  font-size: 2rem;
  cursor: pointer;

  /* :hover {
    color: ${({ theme }) => theme.colors.CeladonBlue};
    border-color: ${({ theme }) => theme.colors.CeladonBlue};
  } */
`;
