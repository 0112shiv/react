
var React = require('react');
var ReactDOM = require('react-dom');
// A fragment looks like an empty HTML tag: <></>.

const myElement = ( <>
<h1>shivam hello</h1>
</>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);