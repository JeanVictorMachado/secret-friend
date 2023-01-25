import styled from "styled-components";

export const Footer = styled.footer`
  margin: 64px 0;
`;

export const ResulText = styled.p`
  color: #fe652bfc;
  font-size: 25px;
`;

export const Form = styled.form`
  p {
    font-size: 20px;
    font-weight: 200;
    margin: 32px 0;
  }
`;

export const DrawerButton = styled.button`
  width: 350px;
  height: 80px;
  font-size: 20px;
  box-shadow: 2px 2px 0px 1px #000000;
  border-radius: 45px;
  background-color: #fe652b;
  color: #fff;
  cursor: pointer;
  margin: 16px 0;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #4b69fd;
  }

  @media screen and (max-width: 800px) {
    width: 220px;
    margin: 32px 0;
  }
`;

export const Select = styled.select`
  border-radius: 45px;
  height: 82px;
  width: 70%;
  box-sizing: border-box;
  padding: 0 32px;
  font-size: 20px;
  border: 2px solid black;
  box-shadow: 0px 2px 0px 1px #000000;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
