import React from 'react';
class Second extends React.PureComponent {
  render() {
    console.log('Second Rendered');
    return (
      <div className="mybox">
        <h1>Second</h1>
      </div>
    );
  }
}
export default Second;
