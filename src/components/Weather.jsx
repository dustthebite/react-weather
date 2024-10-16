//require('dotenv')
import '../styles/Weather.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherInfo from './WeatherInfo'


function Weather()
{
    const [city, setCity] = useState("")
    const [newCity, setNewCity] = useState("")
    const [data, setData] = useState("")
        useEffect(() => {
            if(city !== ""){
                axios
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cda971d373577c5bb9fe990962b681d6&units=metric`)
                .then((response) => {
                    console.log(response.data)
                    setData(response.data)
                })
                .catch((error) =>{
                    console.log('ERROR ERROR')
                })
                .finally(() => {
                    console.log('finally block )')
                })}
    }, [city])


    function handleInputChange(event)
    {
        setNewCity(event.target.value)
    }

    function searchCity()
    {
        if(newCity.trim() !== ""){
            setCity(newCity)
            setNewCity("")
        }
    }

    return (<>
    <div className='weather-holder'>

        <div className='search-div'>
            <input
                type='text'
                placeholder='Enter the city name'
                value = {newCity}
                onChange={handleInputChange}
            />
            <button
                className='search-button'
                onClick={searchCity}
            >
                Search
            </button>
        </div>

        <div className='info-holder'>
            <WeatherInfo 
                weather={data}
                />
        </div>

    </div>
    
    </>)
}

export default Weather