var React = require('react');
var { Link, IndexLink } = require('react-router');

var Navigation = React.createClass({
    render: function(){
        return (
            <nav>
                <b>React Weather</b>
                <IndexLink to="/" activeClassName="active" activeStyle={ { fontWeight: 'bold'} }>Get Weatcher</IndexLink>
                <Link to="/about" activeClassName="active" activeStyle={ { fontWeight: 'bold'} }>About</Link>
                <Link to="/examples" activeClassName="active" activeStyle={ { fontWeight: 'bold'} }>Examples</Link>
            </nav>
        )
    }
})

module.exports = Navigation;
