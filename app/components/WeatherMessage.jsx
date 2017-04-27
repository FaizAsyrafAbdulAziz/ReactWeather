var React = require('react');

/*var WeatherMessage = React.createClass({
    render:function(){
        return(
            <h3>It is {this.props.condition.temp} in {this.props.condition.city}</h3>
        );
    }
});*/

var WeatherMessage = (props) => {
    return(
        <h3>It is {props.condition.temp} in {props.condition.city}</h3>
    );
};


module.exports = WeatherMessage;