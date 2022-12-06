const UserRouter = require('./user.route')

const _routes = [
  ['/auth', UserRouter],
  // []
];

const routes = (app) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}

module.exports = routes
