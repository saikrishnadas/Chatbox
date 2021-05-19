import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/" exact></Route>
              {/* Chat */}
            </Switch>
          </AppBody>
        </>
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
