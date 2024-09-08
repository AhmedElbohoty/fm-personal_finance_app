import AppPage from "pages/AppPage";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import useResizeAnimationStopper from "hooks/useResizeAnimationStopper";

import { store } from "store/store";

// Import shared style
import "styles/base.css";
import "styles/helpers.css";
import "styles/text.css";

function App() {
  useResizeAnimationStopper();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppPage />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
