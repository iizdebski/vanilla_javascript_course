// Celsius = (Fahr-32)*5/9
//Fahrenheit = Celsius *9/5 +32

function toFahrenheit(temp){
    let fahr = temp * 9/5 + 32;
    console.log(`${temp} degrees in C is ${fahr} degrees in F`);
}

toFahrenheit(40);

function toCelcius(temp){
    let celcius = ((temp-32)*5/9).toFixed(2);
    console.log(`${temp} degrees in F is ${celsius} degrees in C`);
}
toCelcius(100);