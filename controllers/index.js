"use strict";
const { success, failure } = require("../utils/response-builder");
const apiModel = require("../models/");
const apiController = () => {};

apiController.getDollarData = (req, res, next) => {
    apiModel.getApiDolarToday((data) => {
        const { statusCode, body } = data;
        if (data.err) {
            res.send(failure(statusCode, body));
        } else {
            res.send(success(statusCode, body));
        }
    });
};

apiController.getDollarDataDate = (req, res, next) => {
    let date = req.params.date;
    apiModel.getApiDolarTodayDate(date, (data) => {
        const { statusCode, body } = data;
        if (data.err) {
            res.send(failure(statusCode, body));
        } else {
            res.send(success(statusCode, body));
        }
    });
};

apiController.error404 = (req, res, next) => {
    let error = new Error();
    error = {
        title: "Error 404",
        description: "Recurso No Encontrado",
        error: error,
    };

    error.status = 404;
    res.send(error);
    next();
};

module.exports = apiController;