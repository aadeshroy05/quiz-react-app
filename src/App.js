import React, {useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Jumbotron, Button, Container,Row, Col} from 'react-bootstrap'
import QuizQuestion from './components/QuizQuestion'
import {FaAudioDescription, FaCalendarAlt, FaImage, FaVideo} from 'react-icons/fa'
import {FiPlusCircle} from 'react-icons/fi'
// import useQuestions from './components/CustomHook'


export default function App() { 
  // const {addQuestion, question} = useQuestions();
  // console.log(question)'
  const [question, setQuestion] = useState([]);

  const addQuestion = (option, quest) => {
      const arr = question
      arr.push({
          id: new Date().getTime(),
          option,
          quest,
      })
      setQuestion([...arr])
      return question;
  }

  const deleteQuestion = (id) => {
    const arr = question;
    const filter = arr.filter(item => item.id !== id);
    setQuestion(filter);
  }


  return (
   <Container fluid className="myContainer"> 
      <Jumbotron>
      <Row>
          <Col>
            <h1 className="headerTxt">Create New Quiz</h1>
          </Col>
          <Col xs={3} className="headerBtn">
            <Button className="saveBtn">Save</Button>
            <Button className="cancelBtn">Cancel</Button>          
          </Col>
       </Row>
      </Jumbotron>
      <Jumbotron className="mainDiv">
        <Col> 
          <h3>Question will be typed here</h3>
          <h4>Correct Answer will here here</h4>
        </Col>
      </Jumbotron>
      <Row>
                <Col className="iconList">
                    <FiPlusCircle size={30} onClick={() => addQuestion("", "")}/>
                     <FaCalendarAlt size={30} />
                     <FaImage size={30} />
                     <FaVideo size={30} />
                 </Col>
       </Row>
      {question.map((item, i) =>
      <Row key={i}>
        <Col>
          <QuizQuestion deleteItem={() => deleteQuestion(item.id)} item={item}/>
        </Col>
      </Row>
      )}
   
   </Container> 
  )
}
