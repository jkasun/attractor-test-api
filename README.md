# Attactor Weather API

This is the backend API written with Node.js, Express and Typescript for a Attactor weather app as a developer challenge.

## Available Endpoints

### Weather API

#### Get recent searches

GET /api/weather/recent

This is a mock API for getting recent searches to display on the home page as quick shortcuts to see weather information in a certain city

Sample Response

```json
[
    {
        "city": "Sydney",
        "temperature": "22°C",
        "humidity": "60%",
        "description": "Sunny"
    },
    {
        "city": "Melbourne",
        "temperature": "18°C",
        "humidity": "65%",
        "description": "Cloudy"
    },
    {
        "city": "Brisbane",
        "temperature": "25°C",
        "humidity": "70%",
        "description": "Partly Cloudy"
    }
]
```

#### Get Weather Info by City

GET /api/weather?city=CITY

Get weather information for a certain city. This will return 404 if the searching city is not available in the system

Sample Response

```json
{
    "city": "Sydney",
    "temperature": "22°C",
    "humidity": "60%",
    "description": "Sunny"
}
```

## Setup

Install required node.js modules by running

```
npm install
```

Make sure to create a .env file by copying .env.sample file with environment configuration.

## Test

You can run example unit testing by running

```
npm run test
```

## Development

To start a development server

```
npm run dev
```



