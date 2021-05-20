import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "react-spinkit";

import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import Login from "./components/Login";
import Logo from "./chatbox-logo.svg";

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    <AppLoadingContainer>
      <AppLoading>
        <img src={Logo} alt="" />
        <Spinner name="ball-spin-fade-loader" color="green" fadeIn="none" />
      </AppLoading>
    </AppLoadingContainer>;
  }
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

//Styled components
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoadingContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoading = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
