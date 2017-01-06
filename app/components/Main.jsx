var React = require('react');
var Navigation = require('Navigation');

var Main = React.createClass({
    render: function(){
        return (
            <div>
                <Navigation/>
                <div className="row">
                    <div className="large-4 medium-6 columns small-centered">
                        { this.props.children }
                    </div>
                </div>

            </div>
        )
    }
})

module.exports = Main;
