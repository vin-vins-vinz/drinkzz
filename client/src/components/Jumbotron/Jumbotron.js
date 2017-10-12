// import React from "react";

// const Jumbotron = ({ children }) =>
//   <div style={{ height: 300 }} className="jumbotron">
//     {children}
//   </div>;

// export default Jumbotron;


import React from 'react'
import { Grid, Message, Header } from 'semantic-ui-react'
import "./Jumbotron.css"



const MainPanel = ({children}) => (
   <Grid.Row >
      <Grid.Column style={{ minHeight: 500, padding: '0em 3em' }}>
      <Message>
          <Header as='h1'>Shaker!</Header>
          <p className="jumboContent">
          Type in an ingredient, discover new drinks!
          </p>
          {children}
      </Message>

      </Grid.Column>
    </Grid.Row>
)

export default MainPanel