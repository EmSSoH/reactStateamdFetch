import React, { Component } from "react";
import CountryFactory from "./countryFactory";

class CountryTable extends Component {
  constructor(){
    super();
    
  }


  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            {
              CountryFactory.getLabels.forEach(element => { <th> {element} </th> })
            }
          </tr>
        </thead>
        
        <tbody>
         <tr>
           {
             CountryFactory.getCountries.forEach(element => {})

           }
         </tr>
        </tbody>
      </table>
    );
  }
}
export default CountryTable;