import NavBar from "./components/pages/NavBar";
import PageItems from "./components/pages/PageItems";
import PageCart from "./components/pages/PageCart";
import ItemsDataProvider from "./store/ItemsDataProvider";

function App() {
  return (
    <ItemsDataProvider>
      <NavBar/>
      <PageItems />
      <PageCart />
    </ItemsDataProvider>
  );
}

export default App;
