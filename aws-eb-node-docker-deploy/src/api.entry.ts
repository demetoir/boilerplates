import * as express from "express"

const app = express()

app.get('/', (req, res) => {
    res.json({message: 'hello world'})
})

app.listen(3000, () => {
    console.log('server start at port 3000')
    console.log(`${process.env.NODE_ENV || 'development'}`)
})
