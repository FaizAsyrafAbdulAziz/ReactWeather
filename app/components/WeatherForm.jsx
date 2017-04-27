var React = require('react');

var WeatherForm = React.createClass({
    onSubmitForm:function(e){
        e.preventDefault();
        var city = this.refs.city.value;
        if(typeof city === 'string' && city.length > 0){
            this.props.onSearch(city);
            this.refs.city.value = '';
        }

        
    },
    render:function(){
        return (
            <form onSubmit={this.onSubmitForm}>
                <input type="text" placeholder="your city.." ref="city"/>
                <button type="submit">Get Weather</button>
            </form>
        );
    }
})


module.exports = WeatherForm;