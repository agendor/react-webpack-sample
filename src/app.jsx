'use strict';

var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div>
        This is a React component!
      </div>
    );
  }
});


module.exports.App = App;

if (typeof document != undefined) {
  var container = document.getElementById("react-container");
  React.render(React.createElement(App), container);
}
