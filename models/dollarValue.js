"use-stric";

const searchDollar = () => {};

searchDollar.getValue = (cb) => {
    // acá se hace la función para buscar los valores que quieres mostrar.
    let dataError = {
        statusCode: 500,
        body: {
            title: "Error al consultar la base de datos",
            description: "Hubo un Error al conectarse",
        },
    };
    let dataSuccess = {
        statusCode: 200,
        body: {
            datos: "valores del Dolar que quieres traer..!",
        },
    };

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