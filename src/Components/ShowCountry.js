import React, {Component} from 'react';

class ShowCountry extends Component{
  render(){
    const {country} = this.props;
    return(
      <div className="country-api">
        <span>Id:{country.countryInfo._id}</span>{" - "}
        <span>{country.country}</span>
      </div>
    )
  }
}

export default ShowCountry;