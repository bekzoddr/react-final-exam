import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import Details from "./pages/detail/Details";
import Garant from "./pages/garant/Garant";
import Return from "./pages/return/Return";
import NotFound from "./pages/notFound/NotFound";
import Shipping from "./pages/shipping/Shipping";
import Wishlist from "./pages/wishlist/Wishlist";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Admin from "./pages/admin/Admin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "./pages/auth/Auth";
import Login from "./pages/login/Login";
import CreateCategory from "./pages/admin/CreateCategory";
import ManageCategory from "./pages/admin/ManageCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import ManageProducts from "./pages/admin/ManageProducts";
import Footer from "./components/footer/Footer";
function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <main className="app">
      {!isAdminRoute && <Navbar />}
      {[...Array(10)].map((_, index) => (
        <br key={index} />
      ))}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/garant" element={<Garant />} />
        <Route path="/return" element={<Return />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Auth />}> */}
        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/create-product" element={<CreateProduct />} />
          <Route path="/admin/manage-products" element={<ManageProducts />} />
          <Route path="/admin/create-category" element={<CreateCategory />} />
          <Route path="/admin/manage-category" element={<ManageCategory />} />
        </Route>
        {/* </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <br />
      <br />
      <br />
      {!isAdminRoute && <Footer />}
    </main>
  );
}

export default App;
