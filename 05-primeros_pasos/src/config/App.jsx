import React from "react";
import { Provider } from "react-redux";
import { store } from './store/store.js';
import { RouterPrincipal } from "./routes/RouterPrincipal";

const App = () => {
    return (
        <Provider store={store}>
            <RouterPrincipal />
        </Provider>
    );
}

export default App;