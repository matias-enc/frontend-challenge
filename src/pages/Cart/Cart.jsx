import { useDispatch, useSelector } from "react-redux";
import { Container, Headings, Spinner } from "../../globalStyles";
import {
  ItemGroup,
  CartContainer,
  CartItem,
  CartList,
  CartTotal,
  ImageContainer,
  CartImage,
  Icon,
  Text,
  TextGroup,
  IconGroup,
  EmptyContainer,
  EmptyTitle,
  EmptySubtitle,
  EmptyIconBox,
  TotalTextGroup,
  TotalSubText,
  TotalText,
  PayButton,
  CartGroup,
} from "./Cart.elements";
import { ReactComponent as PlusIcon } from "../../assets/add.svg";
import { ReactComponent as MinusIcon } from "../../assets/minus.svg";
import { ReactComponent as CrossIcon } from "../../assets/cross.svg";
import { ReactComponent as EmptyIcon } from "../../assets/bag-cross.svg";
import {
  floatPriceToString,
  stringPriceToNumber,
} from "../../utilities/price-formatter";
import {
  addItemToCart,
  removeItemFromCart,
  removeOneItemFromCart,
  resetCart,
} from "../../redux/states/cart.state";
import {
  decrementStockOfProduct,
  incrementStockOfProduct,
  restoreStockOfProduct,
} from "../../redux/states/producs.state";
import { handleSendPayment } from "../../services/products.service";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  const handleAddOneItemToCart = (product) => {
    const productFind = products.find((prod) => prod._id === product._id);
    if (productFind.stock >= 1) {
      dispatch(addItemToCart(productFind));
      dispatch(decrementStockOfProduct(productFind));
    }
  };

  const handleRemoveOneItemFromCart = (product) => {
    if (product.count > 1) {
      dispatch(removeOneItemFromCart(product));
      dispatch(incrementStockOfProduct(product));
    }
  };

  const handleRemoveItemFromCart = (product) => {
    const count = product.count;
    dispatch(removeItemFromCart({ product, count }));
    dispatch(restoreStockOfProduct({ product, count }));
  };

  return (
    <>
      <Container>
        <CartContainer>
          {cart.products.length > 0 ? (
            <>
              <Headings>My Cart</Headings>
              <CartGroup>
                <CartList>
                  {cart.products &&
                    cart.products.map((prod) => (
                      <CartItem key={prod._id}>
                        <ItemGroup>
                          <ImageContainer>
                            <CartImage src={prod.image} />
                          </ImageContainer>
                          <TextGroup>
                            <Text className="text-bold">{prod.name}</Text>
                            <IconGroup>
                              <Icon
                                onClick={() =>
                                  handleRemoveOneItemFromCart(prod)
                                }
                              >
                                <MinusIcon />
                              </Icon>
                              <Text className="text-bold">{prod.count}</Text>
                              <Icon>
                                <PlusIcon
                                  onClick={() => handleAddOneItemToCart(prod)}
                                />
                              </Icon>
                            </IconGroup>
                          </TextGroup>
                        </ItemGroup>
                        <ItemGroup>
                          <TextGroup className="flex-end">
                            <IconGroup className="cross">
                              <Icon
                                onClick={() => handleRemoveItemFromCart(prod)}
                              >
                                <CrossIcon />
                              </Icon>
                            </IconGroup>
                            <Text className="text-bold">
                              {floatPriceToString(
                                prod.count * stringPriceToNumber(prod.price)
                              )}
                            </Text>
                          </TextGroup>
                        </ItemGroup>
                      </CartItem>
                    ))}
                </CartList>
                <CartTotal>
                  <TotalTextGroup>
                    <TotalSubText>Total</TotalSubText>
                    <TotalText>{floatPriceToString(cart.total)}</TotalText>
                  </TotalTextGroup>
                  <PayButton
                    type="submit"
                    onClick={() => {
                      dispatch(handleSendPayment(cart.products));
                    }}
                  >
                    {cart.paymentLoader ? <Spinner /> : "PAY"}
                  </PayButton>
                </CartTotal>
              </CartGroup>
            </>
          ) : (
            <EmptyContainer>
              <EmptyIconBox>
                <EmptyIcon />
              </EmptyIconBox>
              <EmptyTitle>Your cart is empty</EmptyTitle>
              <EmptySubtitle>Add the products you want to buy</EmptySubtitle>
            </EmptyContainer>
          )}
        </CartContainer>
      </Container>
    </>
  );
};

export default Cart;

{
  /* <CartItem key={prod._id}>
                    <ImageContainer className="flex-start">
                      <CartImage src={prod.image} />
                    </ImageContainer>
                    <FlexGroup>
                      <CartItemName>{prod.name}</CartItemName>
                      <ItemGroup>
                        <GroupIcon>
                          <MinusIcon />
                        </GroupIcon>
                        <GroupText>{prod.count}</GroupText>
                        <GroupIcon>
                          <PlusIcon />
                        </GroupIcon>
                      </ItemGroup>
                    </FlexGroup>
                    <FlexGroup>
                      <ItemGroup>
                        <GroupText>
                          {floatPriceToString(
                            prod.count * stringPriceToNumber(prod.price)
                          )}
                        </GroupText>
                      </ItemGroup>
                      <ItemGroup className="flex-end">
                        <GroupIcon>
                          <CrossIcon />
                        </GroupIcon>
                      </ItemGroup>
                    </FlexGroup>
                  </CartItem> */
}
