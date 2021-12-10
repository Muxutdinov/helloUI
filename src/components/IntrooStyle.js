import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 500px;
  background: #e5e5e5;
`;
export const Name = styled.div`
  width: 695px;
  height: 105px;
  font-family: Circular Std;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 53px;
  text-align: center;
  color: #050038;
`;
export const Text = styled.div`
  width: 555px;
  height: 62px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  color: #5b5e6d;
`;
export const BottonsWrapper = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const VideoButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
  cursor: pointer;
  width: 245px;
  height: 50px;
  background: rgba(5, 85, 255, 0.1);
  border-radius: 30px;
`;
export const Img = styled.img`
  border-radius: 50%;
  background: #ffffff;
`;
export const ButtonText = styled.div`
  width: 161px;
  height: 32px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 32px;
  text-align: center;
  color: #0555ff;
`;
