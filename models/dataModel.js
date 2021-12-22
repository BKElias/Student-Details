const mongoose =require('mongoose');

const myDataModel =mongoose.Schema({
    first_Name:{
        type: String,
        required: true,
    },
    last_name: {
        type: String,

    },
    date_of_birth: {
        type: Date,
        required: true,
    },
    school: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('ToDoModel', myDataModel);