module.exports = {
  status:
    'Indicates status of the request. If status is true, request was successfully processed. ' +
    'If status is false, it will indicate that there is error on application level, which will ' +
    'be provided as part of the error property',
  error:
    'If application responds with an error, this property will contain error code. ' +
    'Otherwise its empty'
}
