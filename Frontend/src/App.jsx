import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, ThemeContext } from "./context/ThemeProvider";
import MainBody from "./components/MainBody";
import { RECAPTCHA_SITE_KEY } from "./utils/constants";

const App = () => (
  <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY} scriptProps={{ async: true, defer: true }}>
    <ThemeProvider>
      <BrowserRouter>
        <ThemeContext.Consumer>
          {({ isDarkMode, toggleTheme }) => (
            <MainBody isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          )}
        </ThemeContext.Consumer>
      </BrowserRouter>
    </ThemeProvider>
  </GoogleReCaptchaProvider>
);

export default App;
