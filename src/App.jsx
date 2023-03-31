import Mart from "./Components/Mart";
import { ShopContextProvider } from "./Context/ShopContext";

import "../sass/pages/home.scss";
import "../sass/pages/about.scss";
import "../sass/pages/contact.scss";
import "../sass/pages/search.scss";

function App() {
  return (
    <ShopContextProvider>
      <div className="wrapper">
        <Mart />
      </div>
    </ShopContextProvider>
  );
}

export default App;
