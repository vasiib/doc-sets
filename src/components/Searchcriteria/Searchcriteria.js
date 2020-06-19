import React,{Component} from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Table} from 'react-bootstrap';
import './Searchcriteria.css';
import Button from '../Button/Button';
import Searchresults from '../Searchresults/Searchresults';

class SearchCriteria extends Component {
  constructor(props){
    super(props)
  this.state ={
    businessdoc:'',
    edition:'',
    location:'',
    company:'',
    lob:'',
    serof:'',
  }
}

handleChange =(e)=>{
  this.setState({businessdoc: e.target.value})
}
handleEditionChange =(e)=>{
  this.setState({edition: e.target.value})
}
handlelocationChange =(e)=>{
  this.setState({location: e.target.value})
}
handlecompanyChange =(e)=>{
  this.setState({company: e.target.value})
}
handlelobChange =(e)=>{
  this.setState({lob: e.target.value})
}
handleserofChange =(e)=>{
  this.setState({serof: e.target.value})
}
handleSubmit =(e)=> {
  this.setState({
  loc :this.state.location,
  comp:this.state.company,
  lo:this.state.lob,
  sero:this.state.serof})
  alert(`${this.state.location} ${this.state.businessdoc} ${this.state.edition} ${this.state.company} ${this.state.lob} ${this.state.serof}` );
  

  e.preventDefault()
}
  render(){

    return (
      <>
            <form onSubmit={this.handleSubmit}>
            
            <fieldset className="bor">
              <legend className="bor">Set Search Criteria</legend>
              <table className="tabb"><tr ><td className="bord" >
              <label >Location: </label></td>
              <td className="bord">
              <select  value={this.state.location} onChange={this.handlelocationChange}>
               <option > Choose Your Location</option>
                 <option value='Alaska'>Alaska</option>
                 <option value='Arizona'>Arizona</option>
                 <option value='Ohio'>Ohio</option>
                 <option value='South Dakota'>South Dakota</option>
                 <option value='North Dakota'>North Dakota</option>
                </select></td>
               <td className="bord">
              <label >Company: </label></td>
              <td className="bord">
               <select value={this.state.company} onChange={this.handlecompanyChange}>
               <option> Choose Your Company</option>
                 <option>USAA</option>
                 <option>GIC</option>
                 <option>CIC</option>
                 <option>GAR</option>
                </select></td>
               </tr>
               <tr>
                 <td className="bord">
              <label >Line Of Business: </label></td>
              <td className="bord">
              <select value={this.state.lob} onChange={this.handlelobChange}>
               <option> Line Of Business</option>
                 <option>Alaska</option>
                 <option>Arizona</option>
                 <option>Ohio</option>
                 <option>South Dakota</option>
                 <option>North Dakota</option>
                </select></td>
               <td className="bord">
              <label >Service Offered: </label></td>
                <td className="bord">
                <select value={this.state.serof} onChange={this.handleserofChange}>
               <option> Service Offered</option>
                 <option>Alaska</option>
                 <option>Arizona</option>
                 <option>Ohio</option>
                 <option>South Dakota</option>
                 <option>North Dakota</option>
                </select></td>
               </tr>
               <tr>
                 <td className="bord">
              <label >Business Document#: </label></td>
              <td className="bord">
               <input type="text"  value={this.state.businessdoc} onChange={this.handleChange}/>
               </td>
               <td className="bord">
              <label >Edition#: </label></td>
              <td className="bord">
               <input type="text" style={{width:50}}  value={this.state.edition} onChange={this.handleEditionChange}/>
               </td>
               </tr>
               
               </table>
            </fieldset>

            <Button label="Search" />
            
            
         
            </form>
            
            
            <Searchresults location={this.state.loc} company={this.state.comp} lob={this.state.lo} serof={this.state.sero}
            />

            
      </>
    );
  }
}

export default SearchCriteria;