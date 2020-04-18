import React, {Component} from 'react';
import {getCountry} from '../Api/getCountry';
import FoundCountry from './FoundCountry';
import ShowCountry from './ShowCountry';
import Sort from './Sort';

class Countrys extends Component{

  state = {
    countryes : [],
    orignal: [],
    country : {},
  }

  componentDidMount=()=>{
    getCountry()
    .then((response)=>{
      this.setState({
        countryes: response.data,
        orignal: response.data
      })
    })
  }

  orignal =()=>{
    var newCountryes = [...this.state.countryes];
    var Orignal = [...this.state.orignal];
    this.setState({
      countryes: Orignal
    })
  }

  descending=()=>{
    var newCountryes = [...this.state.countryes];
    newCountryes.sort((a, b) => (a.countryInfo._id < b.countryInfo._id) ? 1 : -1);
    this.setState({
      countryes: newCountryes
    })
  }

  ascending =()=>{
    var newCountryes = [...this.state.countryes];
    newCountryes.sort((a, b) => (a.countryInfo._id > b.countryInfo._id) ? 1 : -1);
    this.setState({
      countryes: newCountryes
    })
  }

  updateValue=(e)=>{
    const id = parseInt(e.target.value);
    var newCountry = {};
    const newCountryes = [...this.state.countryes];
    for(var i=0; i< newCountryes.length; i++){
      if(newCountryes[i].countryInfo._id === id){
       newCountry = newCountryes[i];
      }
    }
    this.setState({
      country: newCountry,
    })
  }

  render(){
    return(
      <div className="country">
        <Sort ascending={this.ascending}  descending={this.descending} orignal={this.orignal} />
        <FoundCountry country={this.state.country} updateValue = {this.updateValue} />
        {this.state.countryes.map((country, index)=>(
          <ShowCountry key={index} country={country} />
        ))}
      </div>
    )
  }
}

export default Countrys;

