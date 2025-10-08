import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import ScrollToTop from "./utils/ScrollToTop";
function App() {
  return (
    <div>
      <Navbar />

      <ScrollToTop />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
