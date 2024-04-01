exports.kilogramToPound = function(kg){
    return kg*2.20462
}
exports.poundToKilogram = function(lb){
    return lb/2.20462
}
exports.meterToFeet = function(m) {
    return m * 3.28084;
}
exports.feetToMeter = function(ft) {
    return ft / 3.28084;
}
exports.celsiusToFahrenheit = function(c) {
    return c * 9/5 + 32;
}
exports.fahrenheitToCelsius = function(f) {
    return (f - 32) * 5/9;
}
