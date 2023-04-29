import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../redux/action";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeItem = (value) => {
    dispatch(removeCartItem(value));
  };

  return (
    <>
      {cartItem.map((item, index) => (
        <div className="card mb-3 row">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center col-md-6 ">
                <div>
                  <img
                    src={item.image}
                    className="img-fluid rounded-3"
                    alt="Shopping item"
                    style={{ width: "200px" }}
                  />
                </div>
                <div className="ms-3">
                  <h5>{item.name}</h5>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center col-md-6 justify-content-between">
                <div style={{ width: "50px" }}>
                  <h5 className="fw-normal mb-0">{item.count}</h5>
                </div>
                <div style={{ width: "80px" }}>
                  <h5 className="mb-0">
                    ₹{item.price} * {item.count}
                  </h5>
                </div>
                <i className="fa fa-trash" aria-hidden="true" onClick={()=>removeItem(item.id)}></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Cart;
