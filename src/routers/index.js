import Home from "../pages/homepage/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header/navbar";
import Fav from "../pages/fav";
const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {["/", "/home"].map((path) => (
          <Route exact path={path} element={<Home />} />
        ))}
        <Route exact path="/fav" element={<Fav />} />
      </Routes>
    </Router>
  );
};

export default Routing;
