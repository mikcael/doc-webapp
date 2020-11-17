
import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form, ListGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";

class MyListStateful extends React.Component{

    itemInput = React.createRef();
  
    state = {
      liste: [
        {id:1, texte:"un"},
        {id:2, texte:"deux"},
        {id:3, texte:"trois"}
      ],
      newItem : ''
    };
  
    handleDelete = id => {
      const liste = this.state.liste.slice();
      
      // const index = liste.findIndex(function(item){
      //   return item.id === id // on teste la condition pour trouver l'index
      // });
  
      // en notation allégée
      const index = liste.findIndex(item => item.id === id)
  
      liste.splice(index,1);
  
      this.setState( {liste : liste});
    }
  
    handleSubmit = (event) => {
      event.preventDefault(); 
      const id = new Date().getTime();
      const texte = this.state.newItem;
  
      //const item = {id : id, texte: texte};
      //const liste = this.state.liste.slice();
      //liste.push(item);
      //this.setState({liste : liste, newItem : '' });
      
      // Allégé :
      const liste = [...this.state.liste];
      liste.push({id, texte});
      this.setState({liste, newItem : '' });
  
      
      
    }
  
    handleChange = event => {
      const val = event.currentTarget.value;
      this.setState({ newItem : val})
    }
  
    render(){
      const title="Ma liste en Classe stateful"
      return(
        <Container>
          <h1>{title}</h1>
          <ListGroup className="mb-4" style={{color:"#000"}}>
            {this.state.liste.map(item => (
              <ListGroup.Item>
                <Row>
                  <Col>{item.texte}</Col>
                  <Col><Button className="float-right" variant="outline-danger" onClick={()=>this.handleDelete(item.id)}>Delete</Button></Col>
                </Row>
              </ListGroup.Item>
            ))}
            <Form className="mt-1">
              <Row>  
                <Col><Form.Control value={this.state.newItem} onChange={this.handleChange} type="text" placeholder="Entrez un client"/></Col>  
                <Col><Button className="float-right" variant="primary" onClick={this.handleSubmit}>Ajouter</Button></Col>
              </Row> 
            </Form>
          </ListGroup>
        </Container>
      )
    }
  }

  export default MyListStateful;