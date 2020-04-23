function average(values) {
    var total = 0;
    for (var i = 0; i < values.length; i++) {
        total += values[i];
    }
    const res = (total / values.length).toFixed(2);
    return parseFloat(res);
}

module.exports = { average };