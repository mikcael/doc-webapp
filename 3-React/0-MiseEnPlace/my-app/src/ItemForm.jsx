import React, {Component} from "react";
import { Row, Col, Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class ItemForm extends Component {

    state = {
        newItem : ''
    };

    handleSubmit = (event) => {
        event.preventDefault(); 
        const id = new Date().getTime();
        const texte = this.state.newItem;
    
        this.props.onItemAdd({id, texte});

        this.setState({newItem : ''});
    }

    handleChange = event => {
        const val = event.currentTarget.value;
        this.setState({ newItem : val})
    }

    render() {
        return(
            <Form className="mt-1">
                <Row>  
                <Col><Form.Control value={this.state.newItem} onChange={this.handleChange} type="text" placeholder="Entrez un client"/></Col>  
                <Col><Button className="float-right" variant="primary" onClick={this.handleSubmit}>Ajouter</Button></Col>
                </Row> 
          </Form>
        )
    }
}

export default ItemForm;