import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Camera from './components/camera'
import {Home} from './pages/Home'
import * as Styled from './Global.Reset'
import Camera from './components/camera'

export const App = () => {

  return (
    <>
      <Styled.Global />
      {/* <Header /> */}
      <Router>
        <Route path="/" component={Home} />
        <Route exact path="/camera" component={Camera} />
      </Router>
    </>
  );
}

export default App;
