var React = require('react');

var WeatherForm = React.createClass({
    getInitialState: function(){
        return {
            message: ''
        }
    },
    onFormSubmit: function(e){
        e.preventDefault();
        cityName = this.refs.city.value;

        if (cityName.length > 0) {
            this.refs.city.value = '';
            this.props.onNewCityName(cityName);
        }

    },
    render: function(){
        return (
            <form onSubmit={this.onFormSubmit}>
                <input ref="city" placeholder="Enter city"/>
                <button>Get weather</button>
            </form>
        )
    }
})

module.exports = WeatherForm;









