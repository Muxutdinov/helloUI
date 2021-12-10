import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 961px;
  left: 0px;
  top: 5784px;
  background: #130c3a;
`;

export const FirstWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const FirstName = styled.div`
  width: 639px;
  height: 170px;
  font-family: Circular Std;
  font-style: normal;
  font-weight: 900;
  font-size: 72px;
  line-height: 85px;
  text-align: center;
  color: #ffffff;
`;
export const FirstInputWrapper = styled.div`
  display: flex;
`;
export const FirstInput = styled.input`
  padding: 10px;
  width: 528px;
  height: 80px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  border-radius: 10px 0px 0px 10px;
`;
export const FirstButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 221px;
  height: 80px;
  background: #0555ff;
  border-radius: 0px 10px 10px 0px;
`;

export const SecondWrapper = styled.div`
  flex: 1 ;
  display: flex;
`;
export const SecondLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const LeftTitle = styled.div`
  margin-right: 170px;
  width: 111px;
  height: 34px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  color: #ffffff;
`;
export const LeftText = styled.div`
  width: 311px;
  height: 28px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #7884a6;
`;

export const SecondRight = styled.div`
  /* flex: 1 !important; */
  display: flex;
`;
export const SecondRightWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const RightTitle = styled.div`
  margin-right: 220px;
  width: 94px;
  height: 25px;
  font-family: Circular Std;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
`;
