import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/slicers/cartSlicer";

function Cart() {
   const { cartItems = [] } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

   const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      

      <Container className="my-5">
        <h2 className="text-center mb-5">My Cart</h2>

        {cartItems.length > 0 ? (
          <>
            <Row>
              {cartItems.map((item) => (
                <Col md={12} key={item.id} className="mb-3">
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Row className="align-items-center">
                        <Col md={2}>
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="img-fluid rounded"
                          />
                        </Col>

                        <Col md={3}>
                          <h6 className="mb-1">{item.title}</h6>
                          <p className="fw-bold mb-0">₹ {item.price}</p>
                        </Col>

                        <Col md={3} className="d-flex align-items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline-dark"
                            onClick={() => dispatch(decrementQuantity(item))}
                            disabled={item.quantity <= 1} // optional (UX)
                          >
                            <FaMinus />
                          </Button>

                          <span className="fw-bold">{item.quantity}</span>

                          <Button
                            size="sm"
                            variant="outline-dark"
                            onClick={() => dispatch(incrementQuantity(item))}
                          >
                            <FaPlus />
                          </Button>
                        </Col>

                        <Col md={2}>
                          <p className="fw-bold mb-0">
                            ₹ {(item.price * item.quantity).toFixed(2)}
                          </p>
                        </Col>

                        <Col md={2} className="text-end">
                          
                          <Button
                            variant="outline-danger"
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            <FaTrash />
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Cart Summary */}
            <Card className="mt-4 shadow-sm">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Total: ₹ {cartTotal.toFixed(2)}</h5>
                <Button variant="dark">Proceed to Checkout</Button>
              </Card.Body>
            </Card>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              minHeight: "60vh",
              textAlign: "center",
            }}
          >
            <img
              src="https://i.gifer.com/origin/5d/5d20a530b16e22c86347bb057bceabda.gif"
              alt="Empty cart"
              style={{ maxWidth: "300px", marginBottom: "20px" }}
            />

            <h4>Your cart is empty 🛒</h4>
            <p className="text-muted">Looks like you haven’t added anything yet</p>
          </div>
        )}
      </Container>

      
    </>
  );
}

export default Cart;
