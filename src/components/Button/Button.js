import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Button.css';

function Button(props) {
    
    return (
      
            <button >
                {props.label}
                
            </button>   
      
    );
  }
  

export default Button;