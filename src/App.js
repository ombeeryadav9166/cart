import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./component/ProtectedRoute";
import NonProtectedRoute from "./component/NonProtectedRoute";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import Layout from "./component/Layout";
import "./App.css";
import Cart from "./component/Cart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "./redux/action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    const user =  localStorage.getItem("user");
    dispatch(userLogin(JSON.parse(user)?.isLoggedIn || false))
  },[dispatch])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <NonProtectedRoute>
              <Login />
            </NonProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
