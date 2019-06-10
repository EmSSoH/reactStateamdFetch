//Add imports here

class CountryFactory {
 
 constructor() {
    this.labels = [];
    this.countries = [];
   }

   getLabels = () => {

    fetch('http://localhost:3333/labels')
      .then(response => response.json())
      .then(data => this.labels({ data }));

     return this.labels;
   }
   
   getCountries = () => {

    fetch('http://localhost:3333/countries')
      .then(response => response.json())
      .then(data => this.countries({ data }));

     return this.countries;
   }
}

export default new CountryFactory();