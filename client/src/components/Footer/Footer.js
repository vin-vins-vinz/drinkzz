import React from 'react'
import { Grid, Message } from 'semantic-ui-react'
import "./Footer.css"

const Footer = () => (
    <Grid.Row >
    <Grid.Column style={{ minHeight: 10, padding: '0em 3em' }}>

    <Message size='mini' id='footer'>Copyright © Shaker!/Drinkzz Team AS 2017. All rights reserved.</Message>

    </Grid.Column>
  </Grid.Row>
)

export default Footer