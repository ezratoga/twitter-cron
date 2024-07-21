const successResponse = (data, message) => {
    return {
        code: 200,
        data,
        message,
        error: null
    };
};

const badrequestResponse = (data = null, response) => {
    return {
        code: 400,
        data,
        response,
        error: true
    };
};

const notFoundResponse = (data, response) => {
    return {
        code: 404,
        data,
        response,
        error: true
    };
};

const internalServerResponse = (data, response) => {
    return {
        code: 500,
        data,
        response,
        error: true
    };
};

module.exports = {
    successResponse,
    badrequestResponse,
    notFoundResponse,
    internalServerResponse
};
