// the api give temp in kelvin this is small equation to convert it into Celcius 
export function convertMethodFromKelvinToCelcius(temp: number | undefined) {
    let tempInCelsius
    if(temp){
      tempInCelsius = (temp - 273.15).toFixed(2)
    }
   return `${tempInCelsius}°C`
}