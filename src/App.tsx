import React, { useState } from "react";
import Login from "./pages/login";
import { AppContainer } from "./style";
import { RelayEnvironmentProvider } from "react-relay";
import RelayEnv from "./services/environment";
import Posts from "./pages/posts";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <RelayEnvironmentProvider environment={RelayEnv}>
      <AppContainer>
        {isLoggedIn ? <Posts /> : <Login setIsLoggedIn={setIsLoggedIn} />}
      </AppContainer>
    </RelayEnvironmentProvider>
  );
}

export default App;
