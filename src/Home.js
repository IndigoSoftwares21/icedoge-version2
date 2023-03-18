import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Admin from "./pages/Admin";
import Exchange from "./pages/components/Exchange";
import Login from "./pages/Login";
import Main from "./pages";
import NFT from "./pages/NFT";
import NotFound from './pages/404';
import Presalecard from "./pages/components/presalecard";
import React from "react";
import Swap from "./Swap";
import Team from "./pages/Team";
import Test from "./pages/Test";
import Wagmi from './pages/Wagmi';
import WallecSelect from "./pages/components/WallecSelect";

const Home = () => {
  return (
    <Router>
    <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/buy' component={Swap}/>
        <Route path='/select' component={WallecSelect}/>
        <Route path='/ex' component={Exchange}/>
        <Route path='/pr' component={Presalecard}/>
        <Route path='/team' component={Team}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/test' component={Test}/>
        <Route path='/nft' component={NFT}/>
        
        <Route path='*' component={NotFound}/>
    </Switch>
    </Router>
  )
}

export default Home