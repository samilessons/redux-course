import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import store from "./redux/store";

// components
import App from "./components/app/App";

// styles
import './index.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
