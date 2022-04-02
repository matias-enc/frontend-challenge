import {
  Button,
  Card,
  CardBody,
  CardContainer,
  CardGroup,
  CardImage,
  CardPrice,
  CardTitle,
  EmptyContainer,
  EmptyIconBox,
} from "./Products.elements";
import { ReactComponent as PlusIcon } from "../../assets/add.svg";
import { Container, Headings, Spinner } from "../../globalStyles";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/states/cart.state";
import { useSelector } from "react-redux";
import { decrementStockOfProduct } from "../../redux/states/producs.state";

const Products = () => {
  const { loading, products } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  const handleAddOneItemToCart = (product) => {
    const productFind = products.find((prod) => prod._id === product._id);
    if (productFind.stock >= 1) {
      dispatch(addItemToCart(productFind));
      dispatch(decrementStockOfProduct(productFind));
    }
  };

  return (
    <>
      <Container>
        <CardContainer>
          {loading ? (
            <EmptyContainer>
              <EmptyIconBox>
                <Spinner />
              </EmptyIconBox>
            </EmptyContainer>
          ) : (
            <>
              <Headings>Products</Headings>
              {products &&
                products.map((prod) => (
                  <Card key={prod._id}>
                    <CardImage src={prod.image} />
                    <CardBody>
                      <CardTitle>
                        {prod.name} ({prod.stock})
                      </CardTitle>
                      <CardGroup>
                        <CardPrice>{prod.price}</CardPrice>
                        <Button
                          disabled={prod.stock <= 0 ? true : false}
                          onClick={() => handleAddOneItemToCart(prod)}
                        >
                          <PlusIcon />
                        </Button>
                      </CardGroup>
                    </CardBody>
                  </Card>
                ))}
            </>
          )}
        </CardContainer>
      </Container>
    </>
  );
};

export default Products;
