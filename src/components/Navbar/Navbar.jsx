import {
  NavContainer,
  NavGroup,
  NavLogo,
  NavLink,
  Badge,
  Nav,
} from "./Navbar.elements";
import { ReactComponent as CartIcon } from "../../assets/bag.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchProducts } from "../../services/products.service";

const Navbar = () => {
  const { count } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchProducts());
  }, [dispatch]);

  return (
    <Nav>
      <NavContainer>
        <NavLogo>LOGO</NavLogo>
        <NavGroup>
          <NavLink to="/">PRODUCTS</NavLink>
          <NavLink to="/cart">
            {count > 0 && <Badge>{count}</Badge>}
            <CartIcon />
          </NavLink>
        </NavGroup>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
