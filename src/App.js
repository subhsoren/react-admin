import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/TopBar";
import './App.css';
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/users">
            <UserList />
          </Route>
          <Route path = "/user/:userId">
            <User />
          </Route>
          <Route path = "/newUser">
            <NewUser />
          </Route>
          <Route path = "/products">
            <ProductList />
          </Route>
          <Route path = "/product/:productId">
            <Product />
          </Route>
          <Route path = "/newProduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
