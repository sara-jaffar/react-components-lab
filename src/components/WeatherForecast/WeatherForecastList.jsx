import './WeatherForecast.css';

const WeatherForecastListItem = (props) => {
    return (
        <div className="weather">
            <h2>{props.day}</h2>
            <img src={props.img} alt={props.imgAlt} />
            <p><span>conditions: </span>{props.conditions}</p>
            <p><span>time: </span>{props.time}</p>
        </div> 
    )
}

const WeatherForecastsList = (props) => {
    return (
        <>
            {props.weatherForecasts.map(forecast =>
            <WeatherForecastListItem 
            day={forecast.day}
            img={forecast.img}
            imgAlt={forecast.imgAlt}
            conditions={forecast.conditions}
            time={forecast.time}
            />
            )}
        </>
    )
}

export default WeatherForecastsList;