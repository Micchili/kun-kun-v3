import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main } from './components/Main'
import {Home} from './pages/Home'
import * as Styled from './Global.Reset'
import Camera from './components/camera'
export const App = () => {

  return (
    <>
      <Styled.Global />
      {/* <Header /> */}
      <Main>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/camera" component={Camera} />
        </Router>
      </Main>
    </>
  );
}

export default App;
