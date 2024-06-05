import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./main/Footer";
import NavbarItem from "./main/Navbar";
import Testimonials from "./pages/Testimonials";
import Home from "./main/Home";
import AboutUs from "./pages/AboutUs";
import Offers from "./pages/Offers";
import Details from "./components/Details";
import Cart from "./pages/Cart";
import { useReducer } from "react";
import { cartReducer, initialCart } from "./store/reducer";
import { CartContext } from "./store/context";
import Contact from "./pages/Contact";
import PayPage from "./pages/PayPage";
import PayMethod from "./components/PayMethod";
function App() {
  const [state, dispatch] = useReducer(cartReducer, initialCart);
  const cartContextValue = {
    state,
    dispatch,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      <Router>
        <div className="App">
          <NavbarItem />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/paypage" element={<PayPage />} />
            <Route path="/paymethod" element={<PayMethod />} />{" "}
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
