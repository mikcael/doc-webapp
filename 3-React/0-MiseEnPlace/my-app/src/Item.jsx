import React, {Component} from "react";
import { Row, Col, Button, ListGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Optimisé avec destructuration des props et code concis :
const Item = ({details, onDelete}) =>  (
    <ListGroup.Item>
        <Row>
        <Col>{details.texte}</Col>
        <Col><Button className="float-right" variant="outline-danger" onClick={()=>onDelete(details.id)}>Delete</Button></Col>
        </Row>
    </ListGroup.Item>
);


// functionnal component (stateless) :
// function Item(props)  {

//         const { details, onDelete} = props;

//         return(
//             <ListGroup.Item>
//                 <Row>
//                 <Col>{details.texte}</Col>
//                 <Col><Button className="float-right" variant="outline-danger" onClick={()=>onDelete(details.id)}>Delete</Button></Col>
//                 </Row>
//             </ListGroup.Item>
//         );
// }

// Version intermédiaire code optimisé mais classe stateful:

// class Item extends Component {

//     render () {
//         // const details = this.props.details;
//         // const onDelete = this.props.onDelete

//         // écrit plus vite en destructuring :
//         const { details, onDelete} = this.props;

//         return(
//             <ListGroup.Item>
//                 <Row>
//                 <Col>{details.texte}</Col>
//                 <Col><Button className="float-right" variant="outline-danger" onClick={()=>onDelete(details.id)}>Delete</Button></Col>
//                 </Row>
//             </ListGroup.Item>
//         )
//     }
// }


// Version Originale :

// class Item extends Component {

//     render () {
//         return(
//             <ListGroup.Item>
//                 <Row>
//                 <Col>{this.props.details.texte}</Col>
//                 <Col><Button className="float-right" variant="outline-danger" onClick={()=>this.props.onDelete(this.props.details.id)}>Delete</Button></Col>
//                 </Row>
//             </ListGroup.Item>
//         )
//     }

// }

export default Item;