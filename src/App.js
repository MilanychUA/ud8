import NavBar from "./components/pages/NavBar";
import PageItems from "./components/pages/PageItems";
import PageCart from "./components/pages/PageCart";
import ItemsDataProvider from "./store/ItemsDataProvider";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ItemsDataProvider>
      <NavBar />
      <Routes>
        <Route path ="/" element={<h1> Home page</h1>} />
        <Route path="/items" element={<PageItems />} />
        <Route path="/cart" element={<PageCart />} />
        <Route path="*" element={<h1>Error page</h1>} />
      </Routes>
    </ItemsDataProvider>
  );
}

export default App;
