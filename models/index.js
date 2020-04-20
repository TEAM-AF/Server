"use strict";

const searchDollar = require("./dollarValue");
const apiModel = () => {};

apiModel.getApiDolarToday = (cb) => searchDollar.getValue(cb);
apiModel.getApiDolarTodayDate = (date, cb) =>
    searchDollar.getValueDate(date, cb);

module.exports = apiModel;