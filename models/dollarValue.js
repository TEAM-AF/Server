"use-stric";
const requestPromise = require("request-promise");
const cheerio = require("cheerio");
const { average } = require("../utils/average");

const searchDollar = () => {};

searchDollar.getValue = async(cb) => {
    let response;
    let prices = {};

    const options = {
        uri: "https://monitordolarvenezuela.com/",
        transform: function(body) {
            return cheerio.load(body);
        },
    };
    try {
        const $ = await requestPromise(options);
        const priceLabels = [
            "dolarToday",
            "localBitcoin",
            "yadio",
            "airTM",
            "bolivarCucuta",
        ];
        priceLabels.map((priceLabel, index) => {
            const htmlIndicator = `#space1 > div > div > div.col-12.col-lg-6.order-0.order-sm-0.order-md-0.order-lg-1 > div.box-cont > div:nth-child(${
        index + 1
      }) > div.col-6.col-lg-4`;
            let price = $(htmlIndicator).html();
            if (index) {
                price = price.split(">")[2];
            }
            price = price.replace(".", "").replace(",", ".");
            prices[priceLabel] = Number(price);
        });

        response = {...prices, promedio: average(Object.values(prices)) };
    } catch (error) {
        response = error;
    }

    let dataSuccess = { body: { todayDolar: response } };

    cb(dataSuccess);
};

searchDollar.getValueDate = (date, cb) => {
    // Validación length Date

    const dateValidate = date.split("-").join("");
    const value = dateValidate.length;
    let dataError = {
        statusCode: 500,
        body: {
            title: "Error al consultar la base de datos",
            description: `La fecha ingresada: ${date}, no es Correcta recuerda mandar el valor correcto.`,
        },
    };
    let dataSuccess = {
        statusCode: 200,
        body: {
            datos: `valores del Dolar que quieres traer: ${date}`,
        },
    };
    cb(value !== 8 ? dataError : dataSuccess);
};

module.exports = searchDollar;