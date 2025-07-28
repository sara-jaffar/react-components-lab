const WeatherForecastListItem = (props) => {
    return (
        <li>
            <img src={props.img} alt={props.imgAlt} />
            <p><span>conditions: </span>{props.conditions}</p>
            <p><span>time: </span>{props.time}</p>
        </li>
    )
}

const WeatherForecastsList = (props) => {
    return (
        <>
        <h2>Day of the Week</h2>
        {props.weatherForecasts.map(forecast =>
        <WeatherForecastListItem 
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