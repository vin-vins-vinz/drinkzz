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
      <Grid.Column style={{ minHeight: 400, padding: '0em 3em' }}>
      <Message>
        <Header as='h1'>Drinkzz</Header>
          <p>
          Type in an ingredient and we'll look for different drinks with that ingredient
          </p>
          {children}
      </Message>

      </Grid.Column>
    </Grid.Row>
)

export default MainPanel