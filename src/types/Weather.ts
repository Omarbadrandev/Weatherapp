interface Main {
  temp: number,
  feels_like: number,
  temp_min:number,
  temp_max: number,
  pressure: number,
  humidity: number
}
interface Coord {
  lon: number,
  lat: number
}
interface Wind {
  speed: number,
  deg: number
}
interface Sys {
  type: number,
  id: number,
  message: number,
  country: string,
  sunrise: number,
  sunset: number
}

export interface Weather 
{
    coord: Coord,
    weather: [
      {
        id: number,
        main: string,
        description: string,
        icon: string
      }
    ],
    base: string,
    main: Main,
    visibility: number,
    wind: Wind,
    clouds: {
      all:number
    },
    dt: number,
    sys: Sys,
    timezone: number,
    id: number,
    name: string,
    cod: number
  }   