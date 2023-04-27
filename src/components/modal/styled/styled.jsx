import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Mdal = styled.div`
  width: 700px;
  height: 100%;
  background: white;

  z-index: 10;
  border-radius: 10px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    width: 360px;
  }

  @media (max-width: 370px) {
    width: 300px;
  }
`;

export const Centrar = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Line = styled.hr`
  margin: 5px;
`;

export const BodyModal = styled.div`
  padding: 10px;
`;

export const Title = styled.h2`
  font-size: 23px;
  font-weight: bold;
  color: black;
  text-decoration: underline;
`;

export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 10px;
  color: black;
  font-height: bold;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #cccccc;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 5px 5px 5px 0;
`;

export const Button = styled.button`
  padding: 7px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.color || "#000"};
  color: black
  text-align: center;
  font-size: 16px;
  cursor: pointer;
`;

export const InputGroup = styled.div`
  margin: 15px 0;
`;

export const Label = styled.label`
  font-size: 16px;
  display: block;
  margin-bottom: 3px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
`;

export const Option = styled.option`
  padding: 10px;
  &:focus {
    background-color: #ccc;
  }
`;
