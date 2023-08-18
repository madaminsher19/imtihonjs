var yill = 2024;
function kabisa(yili) {
    var result;
    yili = yill;
    if (yill % 400 == 0) {
        result = true;
    } else if (yill % 100 == 0) {
        result = false;
    } else if (yill % 4 == 0) {
        result = true;
    } else {
        result = false;
    }
    console.log(result);
}
kabisa()