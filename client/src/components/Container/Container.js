import React from 'react';
import { Grid, Message } from 'semantic-ui-react';
import "./Container.css"


const Bottom = ({ children }) => (
	<Grid.Row >
		<Grid.Column id='bottom' style={{ minHeight: 400, padding: '0em 3em'}}>
			<Message>
				{ children }
			</Message>
		</Grid.Column>
	</Grid.Row>

)

export default Bottom