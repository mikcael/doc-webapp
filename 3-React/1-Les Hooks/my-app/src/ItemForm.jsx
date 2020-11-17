import React, {useState} from "react";
import { Row, Col, Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemForm = (props) => {
// const ItemForm = ({onItemAdd}) => {  <-- on destructure le props

    const [newItem, setNewItem] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const id = new Date().getTime();
        const texte = newItem;
    
        props.onItemAdd({id, texte});
        //onItemAdd({id, texte});  <-- après destructuration du props

        setNewItem("");
    }

    const handleChange = event => {
        setNewItem(event.currentTarget.value)
    }

    return(
        <Form className="mt-1">
            <Row>  
            <Col><Form.Control value={newItem} onChange={handleChange} type="text" placeholder="Entrez un client"/></Col>  
            <Col><Button className="float-right" variant="primary" onClick={handleSubmit}>Ajouter</Button></Col>
            </Row> 
        </Form>
    )
}

export default ItemForm;