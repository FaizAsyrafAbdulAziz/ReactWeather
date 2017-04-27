var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState:function(){
        return {
            isLoading:false
        };
    },
    handleSearch:function(city){
        var that = this;
        this.setState({isLoading:true});
        openWeatherMap.getTemp(city).then(function (temp){
            that.setState({
                city:city,
                temp:temp,
                isLoading:false
            });
        }, function(errorMsg){
            alert(errorMsg);
            that.setState({isLoading:false});
        });
    },
    render:function(){
        var { isLoading } = this.state;
        var that = this;
        function renderMessage(){
            if(isLoading){
                return <h3>Fetching Weather ...</h3>;
            } else if(that.state.temp && that.state.city){
                return  <WeatherMessage condition={that.state}/>;
            }
        }
        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {
                    renderMessage()
                }
            </div>
            
        );
    }
});


module.exports = Weather;