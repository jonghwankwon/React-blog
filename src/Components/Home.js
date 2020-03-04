import React, { Component } from 'react';
const API_KEY = '6d4d699668fa07da88feca53cc4abaf4'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            lat : 0,
            long : 0,
            temperature: 0,
            name: "",
            icon: "",
        }
    }
    
    getWeather = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=Daejeon&APPID=${API_KEY}`)    // 도시 이름으로 날씨 정보를 가져옴
        .then(Response => Response.json())
        .then(json => {
            this.setState({
                temperature: Math.floor(json.main.temp - 273.15),
                name: json.weather[0].main,
                icon: json.weather[0].con,
            });
        });
    }
    componentDidMount() {
        this.getWeather()
    }

    render() {
        const { temperature, name} = this.state;
        // const img_url = `http://openweathermap.org/img/w/${icon}.png`; // icon 사용 시 const에 icon 추가

        return (
            <>
            <h1>오늘의 날씨</h1>
            {/* <img alt="weather_icon" src={img_url}/> */}
            <h3>온도 : {temperature}ºC</h3>
            <h3>날씨 : {name} </h3>
            </>
        );
    }
}
export default Home;