import '../styles/WeatherInfo.css'

function WeatherInfo({weather})
{
    return (<>
    
        {
            weather !== "" ? (
            <div className='weather-grid'>
                <div className='weather-name'>{weather.name}</div>
                <div className='weather-temperature'>Temperature {weather.main.temp}</div>
                <div className='weather-temperature-min'>Minimal temperature {weather.main.temp_min}</div>
                <div className='weather-temperature-max'>Maximum temperature {weather.main.temp_max}</div>
                <div className='weather-pressure'>Pressure {weather.main.pressure}</div>
                <div className='weather-humidity'>Humidity {weather.main.humidity}</div>
            </div>
        
    
    ) : (
        <h1
            className='enter-city-h1'
        >   Enter your city</h1>)
         }

    </>)
}

export default WeatherInfo