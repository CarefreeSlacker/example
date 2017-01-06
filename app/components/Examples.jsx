var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
    render: function(){
        return (
            <div>
                <h1 className="text-center">Examples</h1>
                <p>Here are some examples</p>
                <ol>
                    <li><Link to="/?location=Moscow">Moscow</Link></li>
                    <li><Link to="/?location=Saint-Petersburg">Saint-Petersburg</Link></li>
                    <li><Link to="/?location=Rio,Brazil">Rio, Brazil</Link></li>
                </ol>
            </div>
        )
    }
})

module.exports = Examples;
