const performNext = (middlewares, req, res, next) => (err) => {
  if (err) {
    return next(err)
  }
  const middleware = middlewares.shift()
  if (middleware) {
    return middleware(req, res, performNext(middlewares, req, res, next))
  }
  next()
}

module.exports = performNext
