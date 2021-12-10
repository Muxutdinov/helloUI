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
  width: 953px;
  height: 214px;
  font-family: Circular Std;
  font-style: normal;
  font-weight: 900;
  font-size: 96px;
  line-height: 120px;
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
export const TryButton = styled.div`
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 208px;
  height: 60px;
  background: #0555ff;
  border-radius: 30px;
`;
export const VideoButton = styled.div`
  cursor: pointer;
  color: #0555ff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 251px;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(176, 201, 253, 0.3);
  border-radius: 30px;
`;
