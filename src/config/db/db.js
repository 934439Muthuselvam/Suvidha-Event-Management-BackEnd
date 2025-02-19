import mongoose from 'mongoose'
export const conn = mongoose.createConnection("mongodb+srv://muthuselvam73bitf:1234@cluster0.0jr7f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", (err, db) => {
  if (err) {
    console.log(err)
  }
  console.log('Master Data Dictionary Database Connected successfully')
})


// import mongoose from 'mongoose'
// export const conn = mongoose.createConnection('mongodb://0.0.0.0:27017/suvidha', (err, db) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log('Master Data Dictionary Database Connected successfully')
// })