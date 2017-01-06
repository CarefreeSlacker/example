var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        }
    },
    refreshCityName: function(cityName){
        var that = this;
        
        this.setState({ isLoading: true })
        OpenWeatherMap.getTemp(cityName).then(function(temp){
            that.setState({ cityName: cityName, temperature: temp, isLoading: false });
        }, function(errorMessage){
            that.setState({ isLoading: false });
            alert(errorMessage);
        });
    },
    render: function(){
        var { isLoading, cityName, temperature } = this.state;

        function renderMessage(){
            if(isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>
            } else if(temperature && location) {
                return <WeatherMessage cityName={cityName} temperature={ temperature }/>
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onNewCityName={ this.refreshCityName }/>
                { renderMessage() }
            </div>
        )
    }
})

module.exports = Weather;






