import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Home} from './pages/Home'
import * as Styled from './Global.Reset'
import Camera from './components/camera'
import Test from './pages/test'

export const App = () => {

  return (
    <>
      <Styled.Global />
      {/* <Header /> */}
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/camera" component={Camera} />
        <Route exact path="/test" component={Test} />
      </Router>
    </>
  );
}

export default App;
