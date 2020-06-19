import React from 'react';
import {useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Modal from 'react-bootstrap/Modal';
import {Row,Col,Container} from 'react-bootstrap';
import './header.css';

function Header() {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
    
    const mystyle ={
        backgroundColor:"#ffffcc",
        height:'auto', 
        

    }
    
  
    return (
      <>
        
  
        <Modal
          size="xl"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="main-modal"
          aria-labelledby="example-modal-sizes-title-lg"
          
        >
          <Modal.Header className="header" closeButton>
            <Modal.Title className="title">Document Set Search</Modal.Title>
          </Modal.Header>
          <Modal.Body style={mystyle}>
            
            
            <fieldset className="bor">
              <legend className="bor">Set Search Criteria</legend>
              <Container>
                <Row>
                  <Col xs={6} md={6}>
              <label >Location: </label>
               <input type="text"/>
               </Col>
               <Col xs={6} md={6}>
              <label >Company: </label>
               <input type="text"/><br />
               </Col>
               </Row>
               <Row>
               <Col xs={6} md={6}>
              <label >Line Of Business: </label>
               <input type="text"/>
               </Col>
               <Col xs={6} md={6}>
              <label >Service Offered: </label>
               <input type="text"/>
               </Col>
               </Row>
               <Row>
               <Col xs={6} md={6}>
              <label >Business Document#: </label>
               <input type="text"/>
               </Col>
               <Col xs={6} md={6}>
              <label >Edition: </label>
               <input type="text"/>
               </Col>
               </Row>
               </Container>
            </fieldset>
            
            <button >
                Search
            </button>

            <fieldset className="bor">
              <legend className="bor">Set Search Results</legend>
              <table className="tab"><tr>
                <th>Sl.No</th>
                <th>Location</th>
                <th>Company</th>
                <th>Line Of Business</th>
                <th>Service Offered</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Arizona</td>
                <td>USAA</td>
                <td>USAA</td>
                <td>USAA</td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
               </table>
            </fieldset>
            
            <button >
                Search
            </button>
            
            
           
          </Modal.Body>
          
        </Modal>
      </>
    );
  }
  

export default Header;