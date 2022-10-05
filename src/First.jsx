import React from 'react';
class First extends React.Component{
  render(){
    console.log("First Rendered")
    return(
      <div className="mybox">
        <h1>First</h1>
      </div>
    )
  }
}
export default First