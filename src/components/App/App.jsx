import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import NotFound from "../../pages/NotFound";
import Home from "../../pages/Home";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
