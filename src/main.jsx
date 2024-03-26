import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import persistedCartReducer from "./redux/cartReducer.js";
import { PersistGate } from "redux-persist/integration/react";
import persistedCustomerReducer from "./redux/customerReducer.js";

const store = configureStore({
  reducer: { cart: persistedCartReducer ,
  customer: persistedCustomerReducer},
});
const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  
);
