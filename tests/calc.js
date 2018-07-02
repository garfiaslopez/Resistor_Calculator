var mapValues = require('../helpers/mapValues');

const array = mapValues.getValues();
const resistor = 1208;

array.forEach((obj)=>{
    const div = resistor / obj.multiplier;
    isDisible = (div/10)%2;
    if (isDisible >= 1) {
        console.log(obj.color + obj.multiplier);
    }
    console.log(isDisible);
    log
});
