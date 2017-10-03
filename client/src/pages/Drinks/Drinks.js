import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
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
      API.getDrink({
        ingredient: this.state.ingredient,
      })
        .then(res => this.loadDrinks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What drinks can I make?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.ingredient}
                onChange={this.handleInputChange}
                name="ingredient"
                placeholder="ingredient (required)"
              />
              
              <FormBtn
                disabled={!(this.state.ingredient)}
                onClick={this.handleFormSubmit}
              >
                Submit ingredient
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>Drinks can be made with your ingredients.</h1>
            </Jumbotron>
            {this.state.drinks ? (
              <List>
                {this.state.drinks.map(drink => (
                  <ListItem>
                    <Link to={"/drinks/" + drink._id}>
                      <strong>
                        {drink.title}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
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
