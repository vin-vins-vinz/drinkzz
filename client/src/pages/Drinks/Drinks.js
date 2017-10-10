import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import MainPanel from "../../components/Jumbotron";
import {Card, Image } from "semantic-ui-react"
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Drinks extends Component {
  state = {
    drinks: [],
    title: "",
    picture: "",
    ingredient: "",
    instruction: ""
  };

  componentDidMount() {
    // this.loadDrinks();
  }

  loadDrinks = () => {
    API.getDrink()
      .then(res =>
        this.setState({ drinks: res.data, title: "", picture: "", ingredient: "", instruction: "" })
      )
      .catch(err => console.log(err));
  };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.ingredient) {
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

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <MainPanel>
              <form>
              <Input
                value={this.state.ingredient}
                onChange={this.handleInputChange}
                name="ingredient"
                placeholder="Enter an ingredient"
              />
              
              <FormBtn
                disabled={!(this.state.ingredient)}
                onClick={this.handleFormSubmit}
              >
                Submit ingredient
              </FormBtn>
            </form>
            </MainPanel>
            
          </Col>
          <Col size="md-6">
            {this.state.drinks ? (
              <Card.Group>
                {this.state.drinks.map(drink => 
                  <Card raised key={drink._id}>
                    <Link to={"/drinks/" + drink._id}>
                      <Image src={drink.picture} />
                        <Card.Content>
                          <Card.Header>{drink.title}</Card.Header>
                        </Card.Content>
                    </Link>
                    </Card>
                )}
              </Card.Group>
            ) : (
              <h3>No Results to Display</h3>
            )}


          </Col>
        </Row>
      </Container>
    );
  }
}

export default Drinks;
