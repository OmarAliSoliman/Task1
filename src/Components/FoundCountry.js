import React, {Component} from 'react';

class FoundCountry extends Component{
  render(){
    const {found, country, updateValue} = this.props;
    return(
      <div>
        <input type="text" className="ml-2 p-2" onChange={updateValue} placeholder="search for id" /><br/>  
        <h3 className="ml-2 mt-2 shadow p-2">{country.country}</h3>
      </div>
    )
  }
}

export default FoundCountry;