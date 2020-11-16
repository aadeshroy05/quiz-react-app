import React from 'react'
import {Container, Jumbotron, Col,Row, DropdownButton, Dropdown, Form} from 'react-bootstrap'
import './QuizQuestion.css'
import {FaTrash} from 'react-icons/fa'
import {FiX,FiCheckCircle} from 'react-icons/fi'

export default function QuizQuestion({deleteItem}) {
    return (
        <Container fluid className="myContainer1">
          <Jumbotron className="quizSection">
            <Row>
                <Col xs={12}> 
                    <h3 className="title">Question will be typed here</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                        
                    <select className="dropDown">
                        <option value="grapefruit">Short Answer</option>
                        <option value="lime">Paragraph</option>
                        <option selected value="coconut">Multiple Choice</option>
                        <option value="mango">Checkboxes</option>
                    </select>
                </Col>
                <Col xs={10}>
                    <Form className="option">
                    <Form.Control type="options" placeholder="Option 1" /> 
                    <FiX size={20} className="crossIcon"/>
                    <FiCheckCircle size={20} className="checkIcon"/>
                    <FaTrash className="deleteIcon" size={20} onClick={deleteItem}/>
                
                    </Form>
             </Col>
            </Row>
               
      </Jumbotron>
        </Container>
    )
}
