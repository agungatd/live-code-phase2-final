let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let Video = new Schema(
  {
    videoId:{ type: String, required: true },
    userId: [{
       type: Schema.Types.ObjectId, 
       ref: 'User' 
    }]
  }, 
  {
    timestamps: true
}
);

module.exports = mongoose.model('Video', Video);