import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 1440px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
`;

export const CartGroup = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  flex-direction: column;

  @media (min-width: 750px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 750px) {
    overflow-y: scroll;
    max-height: 75vh;
  }
`;

export const CartItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid #efefef;
  padding: 12px 12px 12px 0;

  @media (min-width: 750px) {
    padding: 12px 30px 12px 0;
  }
`;

export const ItemGroup = styled.div`
  display: flex;
  gap: 12px;
  height: 100%;

  @media (min-width: 750px) {
    flex: 1;
  }
`;

export const CartImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  @media (max-width: 750px) {
    width: 60px;
    height: 60px;
  }
`;

export const ImageContainer = styled.div``;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  cursor: pointer;

  @media (min-width: 750px) {
    width: 30px;
    height: 30px;
    & > svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.flex-end {
    justify-self: flex-end;
    align-items: flex-end;
    height: 100%;
  }

  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    &.flex-end {
      flex-direction: row-reverse;
      justify-content: flex-start;
      align-items: center;
    }
  }
`;

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  @media (min-width: 750px) {
    &.cross {
      width: 50%;
      justify-content: end;
    }
  }
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #27094b;

  &.text-bold {
    font-weight: 600;
  }
  &.text-bolder {
    font-size: 18px;
    font-weight: 700;
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

export const EmptyIconBox = styled.div``;
export const EmptyTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #27094b;
`;
export const EmptySubtitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #27094b;
`;

export const CartTotal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  background: #fff;
  border-radius: 10px;
  padding: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  gap: 20px;

  @media (min-width: 750px) {
    width: 25%;
  }
`;

export const TotalTextGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

export const TotalSubText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #27094b;
`;
export const TotalText = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #27094b;
`;

export const PayButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 6px;
  background: #27094b;
  color: #fff;
  padding: 8px 16px;

  font-size: 18px;
  font-weight: 600;
`;
