import { Loader2 } from "lucide-react";
import { lazy, Suspense } from "react";
import { Route,  Routes } from "react-router-dom";

const Home=lazy(()=>import("../pages/Home"))
const About = lazy(() => import("../pages/About"))
const Contact = lazy(() => import("../pages/Contact"))
const Products =lazy(()=>import("../pages/Products"))

function AppRoutes() {
  return (
      <Suspense
        fallback={
          <div className="text-5xl text-blue-500 h-screen flex justify-center items-center">
            <Loader2 className="animate-spin h-10"/>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Suspense>
  );
}
export default AppRoutes;
