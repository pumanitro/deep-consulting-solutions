import React from 'react';
import {fireEvent, render, screen } from '@testing-library/react';
import { Cities } from './Home';
import {ContextProviders} from "../../helpers/tests";

test('removes Bombay from top 15 cities by population', () => {

    const mockedTopCities = [
        {
            "request": {
                "type": "City",
                "query": "Tokyo, Japan",
                "language": "en",
                "unit": "m"
            },
            "location": {
                "name": "Tokyo",
                "country": "Japan",
                "region": "Tokyo",
                "lat": "35.690",
                "lon": "139.692",
                "timezone_id": "Asia/Tokyo",
                "localtime": "2020-12-03 22:21",
                "localtime_epoch": 1607034060,
                "utc_offset": "9.0"
            },
            "current": {
                "observation_time": "01:21 PM",
                "temperature": 12,
                "weather_code": 116,
                "weather_icons": [
                    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                ],
                "weather_descriptions": [
                    "Partly cloudy"
                ],
                "wind_speed": 8,
                "wind_degree": 31,
                "wind_dir": "NNE",
                "pressure": 1016,
                "precip": 0,
                "humidity": 67,
                "cloudcover": 8,
                "feelslike": 11,
                "uv_index": 1,
                "visibility": 10,
                "is_day": "no"
            }
        },
        {
            "request": {
                "type": "City",
                "query": "Shanghai City, USA United States of America",
                "language": "en",
                "unit": "m"
            },
            "location": {
                "name": "Shanghai City",
                "country": "USA United States of America",
                "region": "Illinois",
                "lat": "41.065",
                "lon": "-90.558",
                "timezone_id": "America/Chicago",
                "localtime": "2020-12-03 07:21",
                "localtime_epoch": 1606980060,
                "utc_offset": "-6.0"
            },
            "current": {
                "observation_time": "01:21 PM",
                "temperature": -7,
                "weather_code": 113,
                "weather_icons": [
                    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
                ],
                "weather_descriptions": [
                    "Clear"
                ],
                "wind_speed": 6,
                "wind_degree": 310,
                "wind_dir": "NW",
                "pressure": 1024,
                "precip": 0,
                "humidity": 79,
                "cloudcover": 0,
                "feelslike": -11,
                "uv_index": 1,
                "visibility": 16,
                "is_day": "no"
            }
        },
        {
            "request": {
                "type": "City",
                "query": "Bombay, Suriname",
                "language": "en",
                "unit": "m"
            },
            "location": {
                "name": "Bombay",
                "country": "Suriname",
                "region": "Nickerie",
                "lat": "5.833",
                "lon": "-56.817",
                "timezone_id": "America/Paramaribo",
                "localtime": "2020-12-03 10:21",
                "localtime_epoch": 1606990860,
                "utc_offset": "-3.0"
            },
            "current": {
                "observation_time": "01:21 PM",
                "temperature": 25,
                "weather_code": 353,
                "weather_icons": [
                    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0009_light_rain_showers.png"
                ],
                "weather_descriptions": [
                    "Light rain shower"
                ],
                "wind_speed": 13,
                "wind_degree": 108,
                "wind_dir": "ESE",
                "pressure": 1010,
                "precip": 1.2,
                "humidity": 87,
                "cloudcover": 86,
                "feelslike": 28,
                "uv_index": 6,
                "visibility": 9,
                "is_day": "yes"
            }
        },
        {
            "request": {
                "type": "City",
                "query": "Karachi, Bolivia",
                "language": "en",
                "unit": "m"
            },
            "location": {
                "name": "Karachi",
                "country": "Bolivia",
                "region": "Chuquisaca",
                "lat": "-20.400",
                "lon": "-64.767",
                "timezone_id": "America/La_Paz",
                "localtime": "2020-12-03 09:21",
                "localtime_epoch": 1606987260,
                "utc_offset": "-4.0"
            },
            "current": {
                "observation_time": "01:21 PM",
                "temperature": 15,
                "weather_code": 122,
                "weather_icons": [
                    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                ],
                "weather_descriptions": [
                    "Shower In Vicinity"
                ],
                "wind_speed": 7,
                "wind_degree": 150,
                "wind_dir": "SSE",
                "pressure": 1020,
                "precip": 1,
                "humidity": 88,
                "cloudcover": 100,
                "feelslike": 15,
                "uv_index": 3,
                "visibility": 8,
                "is_day": "yes"
            }
        },
        {
            "request": {
                "type": "City",
                "query": "Delhi, India",
                "language": "en",
                "unit": "m"
            },
            "location": {
                "name": "Delhi",
                "country": "India",
                "region": "Delhi",
                "lat": "28.667",
                "lon": "77.217",
                "timezone_id": "Asia/Kolkata",
                "localtime": "2020-12-03 18:51",
                "localtime_epoch": 1607021460,
                "utc_offset": "5.50"
            },
            "current": {
                "observation_time": "01:21 PM",
                "temperature": 21,
                "weather_code": 122,
                "weather_icons": [
                    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                ],
                "weather_descriptions": [
                    "Smoke"
                ],
                "wind_speed": 0,
                "wind_degree": 0,
                "wind_dir": "N",
                "pressure": 1013,
                "precip": 0,
                "humidity": 49,
                "cloudcover": 0,
                "feelslike": 21,
                "uv_index": 8,
                "visibility": 3,
                "is_day": "yes"
            }
        },
        {
            "request": {
                "type": "City",
                "query": "New Delhi, India",
                "language": "en",
                "unit": "m"
            },
            "location": {
                "name": "New Delhi",
                "country": "India",
                "region": "Delhi",
                "lat": "28.600",
                "lon": "77.200",
                "timezone_id": "Asia/Kolkata",
                "localtime": "2020-12-03 18:51",
                "localtime_epoch": 1607021460,
                "utc_offset": "5.50"
            },
            "current": {
                "observation_time": "01:21 PM",
                "temperature": 21,
                "weather_code": 122,
                "weather_icons": [
                    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                ],
                "weather_descriptions": [
                    "Smoke"
                ],
                "wind_speed": 0,
                "wind_degree": 0,
                "wind_dir": "N",
                "pressure": 1013,
                "precip": 0,
                "humidity": 49,
                "cloudcover": 0,
                "feelslike": 21,
                "uv_index": 8,
                "visibility": 3,
                "is_day": "yes"
            }
        },
        {
            "request": {
                "type": "City",
                "query": "New Manila, Philippines",
                "language": "en",
                "unit": "m"
            },
            "location": {
                "name": "New Manila",
                "country": "Philippines",
                "region": "Quezon City",
                "lat": "14.619",
                "lon": "121.027",
                "timezone_id": "Asia/Manila",
                "localtime": "2020-12-03 21:21",
                "localtime_epoch": 1607030460,
                "utc_offset": "8.0"
            },
            "current": {
                "observation_time": "01:21 PM",
                "temperature": 29,
                "weather_code": 116,
                "weather_icons": [
                    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                ],
                "weather_descriptions": [
                    "Partly cloudy"
                ],
                "wind_speed": 0,
                "wind_degree": 68,
                "wind_dir": "ENE",
                "pressure": 1007,
                "precip": 1.2,
                "humidity": 79,
                "cloudcover": 75,
                "feelslike": 33,
                "uv_index": 1,
                "visibility": 9,
                "is_day": "no"
            }
        },
        {
            "request": {
                "type": "City",
                "query": "Moscow, Russia",
                "language": "en",
                "unit": "m"
            },
            "location": {
                "name": "Moscow",
                "country": "Russia",
                "region": "Moscow City",
                "lat": "55.752",
                "lon": "37.616",
                "timezone_id": "Europe/Moscow",
                "localtime": "2020-12-03 16:21",
                "localtime_epoch": 1607012460,
                "utc_offset": "3.0"
            },
            "current": {
                "observation_time": "01:21 PM",
                "temperature": -6,
                "weather_code": 116,
                "weather_icons": [
                    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                ],
                "weather_descriptions": [
                    "Partly cloudy"
                ],
                "wind_speed": 19,
                "wind_degree": 110,
                "wind_dir": "ESE",
                "pressure": 1031,
                "precip": 0,
                "humidity": 86,
                "cloudcover": 50,
                "feelslike": -12,
                "uv_index": 1,
                "visibility": 9,
                "is_day": "yes"
            }
        },
        {
            "request": {
                "type": "City",
                "query": "Seoul, South Korea",
                "language": "en",
                "unit": "m"
            },
            "location": {
                "name": "Seoul",
                "country": "South Korea",
                "region": "",
                "lat": "37.566",
                "lon": "127.000",
                "timezone_id": "Asia/Seoul",
                "localtime": "2020-12-03 22:21",
                "localtime_epoch": 1607034060,
                "utc_offset": "9.0"
            },
            "current": {
                "observation_time": "01:21 PM",
                "temperature": 4,
                "weather_code": 113,
                "weather_icons": [
                    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
                ],
                "weather_descriptions": [
                    "Clear"
                ],
                "wind_speed": 14,
                "wind_degree": 309,
                "wind_dir": "NW",
                "pressure": 1030,
                "precip": 0,
                "humidity": 36,
                "cloudcover": 1,
                "feelslike": 0,
                "uv_index": 1,
                "visibility": 10,
                "is_day": "no"
            }
        },
        {
            "request": {
                "type": "City",
                "query": "Sao Paulo, Brazil",
                "language": "en",
                "unit": "m"
            },
            "location": {
                "name": "Sao Paulo",
                "country": "Brazil",
                "region": "Sao Paulo",
                "lat": "-23.533",
                "lon": "-46.617",
                "timezone_id": "America/Sao_Paulo",
                "localtime": "2020-12-03 10:21",
                "localtime_epoch": 1606990860,
                "utc_offset": "-3.0"
            },
            "current": {
                "observation_time": "01:21 PM",
                "temperature": 27,
                "weather_code": 113,
                "weather_icons": [
                    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
                ],
                "weather_descriptions": [
                    "Sunny"
                ],
                "wind_speed": 19,
                "wind_degree": 330,
                "wind_dir": "NNW",
                "pressure": 1014,
                "precip": 0,
                "humidity": 54,
                "cloudcover": 0,
                "feelslike": 29,
                "uv_index": 6,
                "visibility": 10,
                "is_day": "yes"
            }
        },
        {
            "request": {
                "type": "City",
                "query": "Istanbul, Turkey",
                "language": "en",
                "unit": "m"
            },
            "location": {
                "name": "Istanbul",
                "country": "Turkey",
                "region": "Istanbul",
                "lat": "41.019",
                "lon": "28.965",
                "timezone_id": "Europe/Istanbul",
                "localtime": "2020-12-03 16:21",
                "localtime_epoch": 1607012460,
                "utc_offset": "3.0"
            },
            "current": {
                "observation_time": "01:21 PM",
                "temperature": 14,
                "weather_code": 116,
                "weather_icons": [
                    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                ],
                "weather_descriptions": [
                    "Partly cloudy"
                ],
                "wind_speed": 13,
                "wind_degree": 40,
                "wind_dir": "NE",
                "pressure": 1020,
                "precip": 0,
                "humidity": 67,
                "cloudcover": 50,
                "feelslike": 14,
                "uv_index": 3,
                "visibility": 10,
                "is_day": "yes"
            }
        },
        {
            "request": {
                "type": "City",
                "query": "Lagos, Nigeria",
                "language": "en",
                "unit": "m"
            },
            "location": {
                "name": "Lagos",
                "country": "Nigeria",
                "region": "Lagos",
                "lat": "6.453",
                "lon": "3.396",
                "timezone_id": "Africa/Lagos",
                "localtime": "2020-12-03 14:21",
                "localtime_epoch": 1607005260,
                "utc_offset": "1.0"
            },
            "current": {
                "observation_time": "01:21 PM",
                "temperature": 32,
                "weather_code": 116,
                "weather_icons": [
                    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
                ],
                "weather_descriptions": [
                    "Partly cloudy"
                ],
                "wind_speed": 9,
                "wind_degree": 340,
                "wind_dir": "NNW",
                "pressure": 1013,
                "precip": 0.1,
                "humidity": 71,
                "cloudcover": 75,
                "feelslike": 38,
                "uv_index": 7,
                "visibility": 10,
                "is_day": "yes"
            }
        },
        {
            "request": {
                "type": "City",
                "query": "Mexico City, Mexico",
                "language": "en",
                "unit": "m"
            },
            "location": {
                "name": "Mexico City",
                "country": "Mexico",
                "region": "The Federal District",
                "lat": "19.429",
                "lon": "-99.128",
                "timezone_id": "America/Mexico_City",
                "localtime": "2020-12-03 07:21",
                "localtime_epoch": 1606980060,
                "utc_offset": "-6.0"
            },
            "current": {
                "observation_time": "01:21 PM",
                "temperature": 13,
                "weather_code": 176,
                "weather_icons": [
                    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0025_light_rain_showers_night.png"
                ],
                "weather_descriptions": [
                    "Patchy rain possible"
                ],
                "wind_speed": 5,
                "wind_degree": 191,
                "wind_dir": "S",
                "pressure": 1017,
                "precip": 0.2,
                "humidity": 64,
                "cloudcover": 80,
                "feelslike": 13,
                "uv_index": 1,
                "visibility": 10,
                "is_day": "no"
            }
        },
        {
            "request": {
                "type": "City",
                "query": "Jakarta, Indonesia",
                "language": "en",
                "unit": "m"
            },
            "location": {
                "name": "Jakarta",
                "country": "Indonesia",
                "region": "Jakarta Raya",
                "lat": "-6.215",
                "lon": "106.845",
                "timezone_id": "Asia/Jakarta",
                "localtime": "2020-12-03 20:21",
                "localtime_epoch": 1607026860,
                "utc_offset": "7.0"
            },
            "current": {
                "observation_time": "01:21 PM",
                "temperature": 28,
                "weather_code": 143,
                "weather_icons": [
                    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0006_mist.png"
                ],
                "weather_descriptions": [
                    "Haze"
                ],
                "wind_speed": 6,
                "wind_degree": 260,
                "wind_dir": "W",
                "pressure": 1009,
                "precip": 2,
                "humidity": 74,
                "cloudcover": 50,
                "feelslike": 29,
                "uv_index": 7,
                "visibility": 5,
                "is_day": "yes"
            }
        },
        {
            "request": {
                "type": "City",
                "query": "New City, United States of America",
                "language": "en",
                "unit": "m"
            },
            "location": {
                "name": "New City",
                "country": "United States of America",
                "region": "New York",
                "lat": "41.148",
                "lon": "-73.990",
                "timezone_id": "America/New_York",
                "localtime": "2020-12-03 08:21",
                "localtime_epoch": 1606983660,
                "utc_offset": "-5.0"
            },
            "current": {
                "observation_time": "01:21 PM",
                "temperature": 0,
                "weather_code": 116,
                "weather_icons": [
                    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                ],
                "weather_descriptions": [
                    "Partly cloudy"
                ],
                "wind_speed": 0,
                "wind_degree": 256,
                "wind_dir": "WSW",
                "pressure": 1022,
                "precip": 0,
                "humidity": 72,
                "cloudcover": 25,
                "feelslike": -3,
                "uv_index": 1,
                "visibility": 16,
                "is_day": "no"
            }
        }
    ];

    render(<ContextProviders><Cities topCities={mockedTopCities}/></ContextProviders>);

    expect(screen.getByText(/Bombay/i)).toBeDefined();
    fireEvent.click(screen.queryAllByText(/Remove/i)[0])
    expect(screen.queryByText(/Bombay/i)).toBeNull();
});
