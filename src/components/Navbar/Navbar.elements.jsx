import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  background: #fafcff;
  padding: 0 30px;

  @media screen and (max-width: 450px) {
    height: 60px;
    padding: 0 12px;
  }
`;

export const NavContainer = styled.nav`
  max-width: 1440px;
  width: 100%;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.a`
  font-size: 24px;
  line-height: 25px;
  font-weight: 700;
  color: #27094b;
`;

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
`;

export const Badge = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  top: 0;
  left: 4px;
  border-radius: 100%;
  background: #27094b;
  color: #fff;
  font-size: 12px;
  line-height: 12px;
`;

export const NavLink = styled(Link)`
  position: relative;
  cursor: pointer;
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
  background: transparent;
  padding: 6px 12px;
  color: #3d225d;
  border-radius: 8px;
  transition: all ease 0.3s;
  text-decoration: none;

  &:hover {
    background: #f3ebfe;
  }

  & > svg {
    width: 28px;
    height: 28px;
    path {
    }
  }
`;
