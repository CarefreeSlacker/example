var React = require('react');

var WeatherMessage = React.createClass({
    getDefaultProps: function(){
        return {
            cityName: 'Moscow',
            temperature: ''
        }
    },
    render: function(){
        debugger;
        var { cityName, temperature } = this.props;
        var messageText = this.props.cityName.length > 0 ? 'Temperature in ' + cityName + ' is ' + temperature : ''
        debugger;
        return <p>{messageText}</p>
    }
})

module.exports = WeatherMessage;
