
import React from 'react';
import { UserContext } from './index';
import Card from './card';
import "./styles.css";

function AllData() {
    const ctx = React.useContext(UserContext);
    return(
        <>
        <Card 
        bgcolor="info"
        header="StrudelBank Customers:"
        body= {ctx.users.map((user, i) => (
          <li key={i}>
              <div>
              Name: {user.name}<br/>
              Email: {user.email}<br/>
              Password: {user.password}<br/>
              Balance: {user.bal}<br/>
              </div>
         </li>
          ))}
         
        >
         </Card>
        </>
      );
    }
    export default AllData;