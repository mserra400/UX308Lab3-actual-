// Take a variable with the *temperature* and another variable with the *relative humidity* and output a *clothing suggestion*.


function convertTempAndHumidToAttire(temperature, humidity) {
    let suggestion;

    if (temperature > 20) {
        if (humidity > 100) {
            suggestion = "It's warm and humid. Wear light clothing and don't forget sunglasses!";
        }
        else (suggestion = "Its dry out.")
    } else if (temperature > 30) {
        suggestion = "The weather is hot. A t-shirt and shorts should be comfortable. Stay hydrated!";
    } 
    else if (temperature > -10) {
        suggestion = "It's freezing. Wear layers and your warmest coat!";

        
    } 
    return suggestion;
}

export{convertTempAndHumidToAttire}