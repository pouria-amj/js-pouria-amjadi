function celsiusToFahrenheit() {
    const celsius = +prompt(`enter degree`)
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  console.log(celsiusToFahrenheit())
  