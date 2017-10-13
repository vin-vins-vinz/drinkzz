import React, { Component } from "react";
import MainPanel from "../../components/Jumbotron";
import {Card, Image } from "semantic-ui-react"
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn } from "../../components/Form";
// import { Input } from 'semantic-ui-react';
import { Heart, Cocktail } from '../../components/Icons';
import Bottom from '../../components/Container';
import Nav from '../../components/Nav'

import { Sidebar, Segment, Button, Menu, Icon, Header, Input } from 'semantic-ui-react'


class Drinks extends Component {
  state = {
    drinks: [],
    visible: false,
    title: "",
    picture: "",
    ingredient: "",
    instruction: ""
  };

toggleVisibility = () => this.setState({ visible: !this.state.visible });
  componentDidMount() {
    // if 
    // this.loadDrinks();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleIngredientFormSubmit = event => {
    event.preventDefault();
    if (this.state.ingredient) {
      // save cookies ingredient 
      API.getDrink(this.state.ingredient.toLowerCase())
        .then(res => {
          // console.log(res.data)
          this.setState({
            drinks: res.data
          })
        })
        .catch(err => console.log(err));
    }
  };

  handleRandomBtn = event => {
    var ingredientArr = ['club soda', 'tequila', 'rum', '7-up', 'coffee', 'champagne', 'ginger beer', 'lemon juice', 'sweet vermouth', 'gin', 'bitters','simple syrup', 'sugar', 'vodka', 'whiskey', 'soda', 'lime'];
    var random = Math.floor(Math.random()*ingredientArr.length);
    var randomChoice = ingredientArr[random];

    event.preventDefault();
  
      API.getDrink(randomChoice)
      .then(res => {
        this.setState({
          drinks: [res.data[0]]
        })
      })
      .catch(err => console.log(err));
    
  };

  handleAllBtn = event => {
    event.preventDefault();
      API.getAllDrinks()
      .then(res => {
        this.setState({
          drinks: res.data, picture: "", title: "",
        })
      })
      .catch(err => console.log(err));
  };


  
  render() {
        const { visible } = this.state
    return (
      <Container fluid>
      <Nav></Nav>
      <div>
      <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='cocktail'>
              <Icon name='cocktail' />
              Favorite Cocktails
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>

            <MainPanel>

                  <h2 className="jumboContent">
                  Type in an ingredient, discover new drinks!
                  </h2>

                  <Button icon
                    onClick={this.handleAllBtn}
                  >
                  <Icon name='grid layout' />
                  </Button>
              <form>
              <Input
                value={this.state.ingredient}
                onChange={this.handleInputChange}
                name="ingredient"
                placeholder="Enter an ingredient"
                icon='search'
                size='massive'
                attached='bottom'/>
              
              <FormBtn
                disabled={!(this.state.ingredient)}
                onClick={this.handleIngredientFormSubmit}
                size="massive">
                <Cocktail />
              </FormBtn>
            </form>
            <Button
                onClick={this.handleRandomBtn}
              >
                Random Drink?
              </Button>
            </MainPanel>

          <Bottom className = 'bottom'>
            {this.state.drinks ? (
              <Card.Group>
                {this.state.drinks.map(drink => 
                  <Card raised key={drink._id}>
                    <Link to={"/drinks/" + drink._id}>
                      <Image src={drink.picture} />
                        <Card.Content>
                          
                          <Card.Header><Heart />{drink.title}</Card.Header>
                        </Card.Content>
                    </Link>
                    </Card>
                )}
              </Card.Group>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Bottom>

        </Segment>
           </Sidebar.Pusher>
         </Sidebar.Pushable>
         </div>
      </Container>
    );
  }
}

export default Drinks;
