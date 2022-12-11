import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const PORT = 3000

const app = express()

app.use(cors)

await mongoose
  .set('strictQuery', true)
  .connect('mongodb+srv://lucrearyuzaki:Expensor123@expensor.hefvn5f.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB connection is successful'))
  .catch(error => console.log(error))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}`))
