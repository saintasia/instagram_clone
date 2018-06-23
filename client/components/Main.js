import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {/* Passing props down to the first child element */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
