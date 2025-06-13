function convertTemperature() {
    // Get the input temperature and scale selection
    const temperatureInput = document.getElementById('temperatureInput').value;
    const scale = document.getElementById('scaleSelector').value;
    const resultDiv = document.getElementById('result');

    // Check if input is empty
    if (temperatureInput === "") {
        resultDiv.textContent = "Please enter a temperature.";
        return;
    }

    // Convert the temperature based on the selected scale
    let result;
    if (scale === "celsius") {
        result = (parseFloat(temperatureInput) * (9 / 5)) + 32;
        resultDiv.textContent = `${temperatureInput}°C is equal to ${result.toFixed(2)}°F`;
    } else if (scale === "fahrenheit") {
        result = (parseFloat(temperatureInput) - 32) * (5 / 9);
        resultDiv.textContent = `${temperatureInput}°F is equal to ${result.toFixed(2)}°C`;
    }
}
