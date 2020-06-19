import React from 'react';
import {useState} from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import './Modal.css';
import SearchCriteria from '../Searchcriteria/Searchcriteria';
//import SearchResults from '../Searchresults/Searchresults';
//import Button from '../Button/Button';

function Modalcls() {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
    
    const mystyle ={
        backgroundColor:"#ffffcc",
        height:'auto', 
        

    }

    
  
    return (

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
            <Modal.Title className="title">
                Document Set Search
            </Modal.Title>
        </Modal.Header>
        <Modal.Body style={mystyle}>

            <SearchCriteria />
            
            
            
            
        </Modal.Body>
          
        </Modal>
     
    );
  }
  

export default Modalcls;