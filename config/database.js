var mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/evernote', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then(() => console.log('conn success'))
.catch((err) => console.log(err))

