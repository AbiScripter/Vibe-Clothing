import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import "./App.css";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
// import store from "./rootStore";
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
