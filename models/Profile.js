const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({

  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle:{
    type:String,
    require:true,
    max:40
 },
 birthDate: {
  type: Date,
  //default:Date.now,
  required: true,
},
gender: {
  type: String,
  required: true
},
  company: {
    type: String
  },
  website: {
  type: String
},
  location: {
  type: String
},
bio: {
  type: String
},

education: [{
  school: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  fieldofstudy: {
    type: String,
    required: true
  },
  from: {
    type: Date,
    required: true
  },
  to: {
    type: Date
  },
  current: {
    type: Boolean,
    default: false
  }
}],

//friend list
friends: [
  {
    user_id: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
],

});





module.exports = Profile = mongoose.model('profile', profileSchema);