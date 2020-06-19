import React, {Component} from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Searchresults.css';
import Button from '../Button/Button';

class SearchResults extends Component {
  render(){
    
    
    return (
      <>

          <fieldset className="bor">
              <legend className="bor">Set Search Results</legend>
                <table className="tab">
                  <tr>
                      <th>Sl.No</th>
                      <th>Location</th>
                      <th>Company</th>
                      <th>Line Of Business</th>
                      <th>Service Offered</th>
                  </tr>
                  <tr className="trr" >
                    <td>1</td>
                    <td>{this.props.location}</td>
                    <td>{this.props.company}</td>
                    <td>{this.props.lob}</td>
                    <td>{this.props.serof}</td>
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
            <Button label="New"/>
            <Button label="Open"/>
            <Button label="Reset"/>
            <Button label="Close"/>
      </>
    );
  }
}
  

export default SearchResults;