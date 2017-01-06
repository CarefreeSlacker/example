var React = require('react');

var WeatherMessage = React.createClass({
    getDefaultProps: function(){
        return {
            cityName: 'Moscow',
            temperature: ''
        }
    },
    render: function(){
        var { cityName, temperature } = this.props;
        var messageText = this.props.cityName.length > 0 ? 'Temperature in ' + cityName + ' is ' + temperature : ''
        return <h3 className="text-center">{messageText}</h3>
    }
})

module.exports = WeatherMessage;
