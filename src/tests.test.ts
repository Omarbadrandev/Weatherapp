import { convertMethodFromKelvinToCelcius } from "./utils"

it('should return the right value in Celcius', () => {
   const valueInCelcius = convertMethodFromKelvinToCelcius(273.15)

   expect(valueInCelcius).toBe('0.00°C')
})


it('should return undefined 0k cannot be reached return anything', () => {
    const valueInCelcius = convertMethodFromKelvinToCelcius(0)
    expect(valueInCelcius).toBe('undefined°C')
 })