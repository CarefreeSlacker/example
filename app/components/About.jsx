var React = require('react');

var About = React.createClass({
    render: function(){
        return (
            <div>
                <h1 className="text-center">About</h1>
                <p>This is education application for React. Allows to fetch data from "Open weather map"</p>
                <ol>
                    <li>Link to resource those provide weather information <a href="http://openweathermap.org/">Open weather map</a></li>
                    <li><a href="https://github.com/facebook/react">Github</a> repository</li>
                    <li><a href="https://www.udemy.com/">Udemy</a>. Education resource, has been created React education course</li>
                </ol>
            </div>
        )
    }
})

module.exports = About;
