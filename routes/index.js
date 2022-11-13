const moviesRouter = require('./movies')

 const routers = (app)=>{
    app.use('/api',moviesRouter)
}

module.exports = routers;