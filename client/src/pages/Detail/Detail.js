import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import MainPanel from "../../components/Jumbotron";
import API from "../../utils/API";
import "./Detail.css"
import { Header } from 'semantic-ui-react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
// import Sidebar from '../../components/Sidebar'

class Detail extends Component {
  state = {
    drink: {
      ingredient:[],
      instructions: ""
    }
  };
  // When this component mounts, grab the drink with the _id of this.props.match.params.id
  // e.g. localhost:3000/drinks/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log(this.props.match.params.id)
    API.getDetail(this.props.match.params.id)
      .then(res => this.setState({ drink: res.data }))
      .catch(err => console.log(err));
  }
// {this.state.drink.ingredient}
  render() {
    return (
      <Container fluid>
      
      <Nav></Nav>
        <Row>
          <Col size="md-12">
            <MainPanel>
              <h1>
                <Header as='h2'>{this.state.drink.title}</Header>
              </h1>
            </MainPanel>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <img src={this.state.drink.picture} alt="placeholder"/>
              <h1>Ingredient</h1>
              <ul>
                {this.state.drink.ingredient.map((ingredient) => 
                  <li className="capitalize">{ingredient}</li>
                  )}
              </ul>
              <h1>Instruction</h1>
              <ol>
                {this.state.drink.instructions.split(", ").map((instructions) => 
                  <li>{instructions}</li>)}
              </ol>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Homepage</Link>
          </Col>
        </Row>

        <Footer id='footer'>
        </Footer>
      </Container>
    );
  }
}

export default Detail;
