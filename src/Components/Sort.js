import React, {Component} from 'react';

class Sort extends Component{
  render(){
    const {ascending, descending, orignal} = this.props;
    return(
      <div>
        <button className="btn-sort" onClick={ascending}>ascending</button>
        <button className="btn-sort" onClick={descending}>descending</button>
        <button className="btn-sort" onClick={orignal}>Orignal</button><br />
      </div>
    )
  }
}
export default Sort;