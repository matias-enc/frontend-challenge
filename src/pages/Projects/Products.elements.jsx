import styled from "styled-components";
import { Spinner } from "../../globalStyles";

export const CardContainer = styled.div`
  max-width: 1440px;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px 2%;
  padding: 30px 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background: #fff;
  padding: 8px;
  border-radius: 16px;
  transition: all ease 0.2s;
  align-self: center;

  width: 100%;

  @media (min-width: 480px) {
    width: 48%;
  }

  @media (min-width: 720px) {
    width: 31%;
  }

  @media (min-width: 1080px) {
    width: 23%;
  }
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 200px;
  border-radius: 12px;
  border: 2px solid #f9f4ff;
  transition: all ease 0.3s;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 8px;
`;

export const CardTitle = styled.h4`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  color: #3d225d;
`;

export const CardGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardPrice = styled.h3`
  display: flex;
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  color: #27094b;
`;

export const Button = styled.button`
  display: flex;
  padding: 8px 12px;
  border-radius: 10px;
  background: #27094b;
  color: #fff;
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all ease-in 0.2s;
  outline: none;
  border: none;

  &:disabled {
    cursor: not-allowed;
    background: #b1adb6;
    &:hover {
      background: #b1adb6;
    }
  }

  & > svg {
    width: 20px;
    height: 20px;
    path {
      stroke: #fff;
      stroke-width: 2.5;
    }
  }

  &:hover {
    background: #3d225d;
  }
`;

export const EmptyContainer = styled.div`
  width: 100%;
  height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const EmptyIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > ${Spinner} {
    width: 40px;
    height: 40px;
    border-left-color: #3d225d;
  }
`;
