import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import { Switch, Route, HashRouter } from "react-router-dom";
import NavBar from "./navbar";
import CreateAccount from "./createaccount";
import AllData from "./alldata";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import Home from './home';
export const UserContext= React.createContext(null);
export const BalContext = React.createContext(null);

function Spa() {
  
  return (
   <HashRouter>
      
      
      <UserContext.Provider value={{users:[{name:'Drew',email:'dsmyser1@gmail.com',password:'HEEhee',bal:50000}]}}>
      <BalContext.Provider value={{
            balance: 200
            
      }}><NavBar/>
        <div className="container" style={{padding: "20px"}}>
        <Switch>
          
        <Route exact path="/"><Home/></Route>
            
                <Route path="/CreateAccount"><CreateAccount/></Route>
             
                <Route path="/AllData"><AllData/></Route>
                <Route path="/Deposit"><Deposit/></Route>
                <Route path="/Withdraw"> <Withdraw/></Route>
        
        </Switch>
        </div>
        

      </BalContext.Provider>
      </UserContext.Provider>
      
      </HashRouter>
  );
};

ReactDOM.render(
  <HashRouter>
  <Spa></Spa>
  </HashRouter>,
  
  document.getElementById('root')
);

export default Spa;