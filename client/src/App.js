import "./App.css";
import Login from "./components/Login";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import useToken from "../src/utils/useToken";

function App() {
  //
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route /* add the pages here.. path = ".. "*/ />
          <Route /* add the pages here.. path = ".. "*/ />
          <Route /* add the pages here.. path = ".. "*/ />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
