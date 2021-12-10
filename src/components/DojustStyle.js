import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 1000px;
  background-color: rgba(248, 248, 250, 1);
`;
export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CreateText = styled.div`
  width: 764px;
  height: 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  color: #5b5e6d;
  margin-bottom: 40px;
`;
export const Name = styled.div`
  width: 1013px;
  height: 64px;
  font-family: Circular Std;
  font-style: normal;
  font-weight: 900;
  font-size: 72px;
  line-height: 32px;
  text-align: center;
  color: #050038;
`;
export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const Card = styled.div`
  width: 320px;
  height: 270px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 10px;
`;
