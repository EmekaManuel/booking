import { Response } from "express";

class Respond {
  /**
   * Error Response
   * @param {object} res response Object
   * @param {string} msg message string for error response
   * @param {Number} status status code
   */

  static error(
    res: Response,
    msg: string,
    status: 422 | 200 | 400 | 404,
    data?: any
  ): Response {
    return res.status(status).json({
      error: true,
      message: msg,
      data,
    });
  }

  /**
   * Success Response
   * @param {object} res response Object
   * @param {string} msg message string for success response
   * @param {Number} status status code
   */

  static success(
    res: Response,
    message: string,
    status: 200,
    data?: any
  ): Response {
    return res.status(status).json({
      error: false,
      message,
      data,
    });
  }
}
export default Respond;
