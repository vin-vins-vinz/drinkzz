import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    drink: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getDrink(this.props.match.params.ingredient)
      .then(res => this.setState({ drink: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.drink.title} by {this.state.drink.ingredient}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <img src={this.state.drink.picture} alt="placeholder"/>
              <h1>Ingredient</h1>
              <p>
                {this.state.drink.ingredient}
              </p>
              <h1>Instruction</h1>
              <p>
                {this.state.drink.instruction}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Homepage</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
