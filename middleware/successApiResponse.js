const sendSuccessApiResponse = (message, statusCode = 200) => {
    const message  = "success";
    return {
        message:message,
        error : false,
        code : statusCode
    };
};

module.exports = { sendSuccessApiResponse};