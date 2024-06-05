import AboutUs from "../pages/AboutUs";
import Promo from "../pages/Promo";
import Testimonials from "../pages/Testimonials";
import Header from "./Header";
import newArrive from "../assests/newArrive.jpg";
import clothing from "../assests/clothing.jpg";
import Feature from "../pages/Feature";
import NewProduct from "../pages/NewProduct";
export default function Home() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Feature />
      <Promo
        img={clothing}
        description={`The perfect gift for her! From clothing to jewellery!`}
      />
      <NewProduct />
      <Promo
        img={newArrive}
        description={`For him: stylish clothing for any event!`}
      />
      <Testimonials />
    </div>
  );
}
