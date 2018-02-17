'use strict';

export default class Response {

  success(res, data) {
    return res.json({
      status_code: 20,
      message: 'Success',
      data
    })
  }

  invalid(res, data) {
    return res.json({
      status_code: 30,
      message: 'Invalid Request'
    })
  }


}
