class ResponseCodes {

    static RESPONSE_CODES = {
      SUCCESS: 200,
      ACCEPTED: 201,
      BAD_REQUEST: 400,
      PAYMENT_REQUIRED: 402,
      ACCESS_NOT: 403,
      NOT_FOUND: 404,
      NOT_ACCEPTABLE: 406,
      TIMEOUT: 408,
      LARGE_PAYLOAD: 413,
      UNPROCESSABLE_ENTITY: 422,
      SERVER_ERROR: 500,
      BAD_GATEWAY: 502
    }
  
    static RESPONSE_MESSAGES = {
      SUCCESS: "Request succeeded.",
      ACCEPTED: "Request accepted.",
      NOT_FOUND: "Not found.",
      BAD_REQUEST: "Request url not found.",
      PAYMENT_REQUIRED: "Payment reuired.",
      ACCESS_NOT: "Forbidden, Access deined.",
      BAD_GATEWAY: "Request method not allowed.",
      NOT_ACCEPTABLE: "Unprocessable entity.",
      TIMEOUT: "Request timeout.",
      LARGE_PAYLOAD: "Request payload too large.",
      SERVER_ERROR: "Internal server error.",
      MISSING_BODY: "Require value missing.",
      CLIENT_NOT_MAPPED: "Client is not mapped with this model portfolio.",
      FILE_ERROR: "Error to process file"
    }
  
    static RESPONSES = {
      SUCCESS: {
        status: this.RESPONSE_CODES.SUCCESS,
        message: this.RESPONSE_MESSAGES.SUCCESS
      },
      ACCEPTED: {
        status: this.RESPONSE_CODES.ACCEPTED,
        message: this.RESPONSE_MESSAGES.ACCEPTED
      },
      NOT_FOUND: {
        status: this.RESPONSE_CODES.NOT_FOUND,
        message: this.RESPONSE_MESSAGES.NOT_FOUND
      },
      BAD_REQUEST: {
        status: this.RESPONSE_CODES.BAD_REQUEST,
        message: this.RESPONSE_MESSAGES.BAD_REQUEST
      },
      PAYMENT_REQUIRED: {
        status: this.RESPONSE_CODES.PAYMENT_REQUIRED,
        message: this.RESPONSE_MESSAGES.PAYMENT_REQUIRED
      },
      ACCESS_NOT: {
        status: this.RESPONSE_CODES.ACCESS_NOT,
        message: this.RESPONSE_MESSAGES.ACCESS_NOT
      },
      BAD_GATEWAY: {
        status: this.RESPONSE_CODES.BAD_GATEWAY,
        message: this.RESPONSE_MESSAGES.BAD_GATEWAY
      },
      NOT_ACCEPTABLE: {
        status: this.RESPONSE_CODES.NOT_ACCEPTABLE,
        message: this.RESPONSE_MESSAGES.NOT_ACCEPTABLE
      },
      TIMEOUT: {
        status: this.RESPONSE_CODES.TIMEOUT,
        message: this.RESPONSE_MESSAGES.TIMEOUT
      },
      LARGE_PAYLOAD: {
        status: this.RESPONSE_CODES.LARGE_PAYLOAD,
        message: this.RESPONSE_MESSAGES.LARGE_PAYLOAD
      },
      SERVER_ERROR: {
        status: this.RESPONSE_CODES.SERVER_ERROR,
        message: this.RESPONSE_MESSAGES.SERVER_ERROR
      },
      FILE_ERROR: {
        status: this.RESPONSE_CODES.BAD_GATEWAY,
        message: this.RESPONSE_MESSAGES.FILE_ERROR
      },
    }
  }
  
  module.exports = ResponseCodes