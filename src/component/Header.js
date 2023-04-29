import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeALLItem, userLogout } from "../redux/action";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cart) || [];
  const totalItem = cartItem.reduce((sum, res) => {
    return sum + res?.count;
  }, 0);

  const RouteChange = (path) => {
    navigate(path);
  };

  const logOut = () => {
    dispatch(userLogout(false));
    dispatch(removeALLItem());

    navigate("/login");
  };

  return (
    <div className="header">
      <span onClick={() => RouteChange("/dashboard")}>Dashboard</span>
      <span onClick={() => RouteChange("/cart")}>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        <span className="badge badge-warning" id="lblCartCount">
          {totalItem}
        </span>
      </span>
      <span onClick={() => logOut()}>Log Out</span>
    </div>
  );
};
export default Header;
