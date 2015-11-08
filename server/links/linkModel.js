var mongoose = require('mongoose'),
    crypto   = require('crypto');

var LinkSchema = new mongoose.Schema({
 visits: Number,
 link: String, //...shortly.api/links/02853 = 
 title: String,
 code: String,   //02853
 base_url: String,
 url: String //actual address of the information
});

var createSha = function(url) {
  // creating a SHA to store in place of password
  var shasum = crypto.createHash('sha1');
  shasum.update(url);
  return shasum.digest('hex').slice(0, 5);
};

LinkSchema.pre('save', function (next){
  var code = createSha(this.url);
  this.code = code;
  next();
});

module.exports = mongoose.model('links', LinkSchema);
