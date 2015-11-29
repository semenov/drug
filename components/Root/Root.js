import React from 'react';
import Html from '../Html/Html';

function Root(props) {
  return (
      <Html js='/bundle.js' css='/style.css' body={props.body} />
  );
}

export default Root;

