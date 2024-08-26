import AppPage from "pages/AppPage";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "store/store";

// Import shared style
import "styles/base.css";
import "styles/text.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppPage />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
