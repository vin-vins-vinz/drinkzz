import React from 'react'
import { Button } from 'semantic-ui-react'

export const FormBtn = (props) => 
    <Button {...props} secondary>Submit Ingredient-
    	{props.children}
    </Button>


