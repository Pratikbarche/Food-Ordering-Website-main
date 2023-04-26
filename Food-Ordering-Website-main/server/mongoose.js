const mongoose = require('mongoose');

mongoose
.connect( 
  'mongodb+srv://Manoj:manoj@cluster0.sedqz.mongodb.net/EatIt?retryWrites=true&w=majority',{
  useNewUrlParser : true,
  useCreateIndex: true,
  useUnifiedTopology: true
}
)
.then(result => {
  
  console.log("Connected to database Successfully!")
  
})
.catch(err => {
  console.log("Can't connect to database!",err);
});