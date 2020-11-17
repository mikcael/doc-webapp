import logo from './logo.svg';
import './App.css';
import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form, ListGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Item from "./Item";
import ItemForm from "./ItemForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Container fluid> */}
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email"/>
                <Form.Text className="text-muted">We'll never share your email address, trust us !!</Form.Text>
                </Form.Group>
              </Col>

              <Col md>
                <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
                <Button variant="secondary" type="submit">Login</Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <Card className="mb-3" style={{color:"#000"}}>
            <Card.Img src="https://picsum.photos/200/100"/>
            <Card.Body>
              <Card.Title> Le titre de la Card</Card.Title>
              <Card.Text> Le text de la Card</Card.Text>
              <Button variant="success">plus</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>Test</Breadcrumb.Item>
            <Breadcrumb.Item>Test 2</Breadcrumb.Item>
            <Breadcrumb.Item active="true">Test 3</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="primary">This is a button</Alert>
          <Button className="mb-4">Test</Button>
          <MyListBrokeDown />
        </Container>
      </header>
    </div>
  );
}



class MyListBrokeDown extends React.Component{

  state = {
    liste: [
      {id:1, texte:"un"},
      {id:2, texte:"deux"},
      {id:3, texte:"trois"}
    ]
  };

  handleDelete = id => {
    const liste = this.state.liste.slice();

    const index = liste.findIndex(item => item.id === id)

    liste.splice(index,1);

    this.setState( {liste : liste});
  }

  handleAdd = item => {
    const liste = [...this.state.liste];
    liste.push(item);
    this.setState({liste});
  }

  render(){
    const title="Ma liste en Classe statefull"
    return(
      <Container>
        <h1>{title}</h1>
        <ListGroup className="mb-4" style={{color:"#000"}}>
          {this.state.liste.map(item => (
            <Item details={item} onDelete={this.handleDelete}/>
          ))}
          <ItemForm onItemAdd={this.handleAdd}/>
        </ListGroup>
      </Container>
    )
  }
}

export default App;
