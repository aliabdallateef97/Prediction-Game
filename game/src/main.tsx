import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import {store} from './core/redux/store.ts'
import App from "./core/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
