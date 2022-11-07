import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Collection } from "./pages/collections/Collection.jsx";
import { HomeOne } from "./pages/home/HomeOne.jsx";

function App() {
  return (
 
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeOne />} />
        <Route path="collections/:category" element={<Collection/>} />
        <Route path="collections/:category" element={<Collection/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
