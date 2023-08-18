var minusArray = [3, -7, 10, -5, 12, -8, -19];

function getNegativeNumbers(array) {
    var minus = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            minus.push(array[i]);
        }
    }
    return minus;
}
console.log(getNegativeNumbers(minusArray));
