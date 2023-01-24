const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://blog2:Blog2@blog2.mckryzh.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Mongo db Working' });
kitty.save().then(() => console.log('meow'));
