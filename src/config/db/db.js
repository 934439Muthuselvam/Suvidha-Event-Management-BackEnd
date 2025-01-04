import mongoose from 'mongoose'
export const conn = mongoose.createConnection('mongodb://0.0.0.0:27017/savidha', (err, db) => {
  if (err) {
    console.log(err)
  }
  console.log('Master Data Dictionary Database Connected successfully')
})
