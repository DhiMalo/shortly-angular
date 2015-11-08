var mongoose = require('mongoose'),
    crypto   = require('crypto'); 

var LinkSchema = new mongoose.Schema({
 visits: Number,
 link: String, // ...shortly.api/links/02853...
 title: String,
 code: String,   // eg. 02853...
 base_url: String,
 url: String // actual address of the information
});

var createSha = function(url) {
  var shasum = crypto.createHash('sha1');   // Invokes a secure hash algorithn (SHA) to generate a code that will replace the long URL. The heart of short.ly
  shasum.update(url);
  return shasum.digest('hex').slice(0, 5);
};

LinkSchema.pre('save', function (next){
  var code = createSha(this.url); //  code is stored instead before saving url to the database (hence the term 'pre-save').
  this.code = code;
  next();
});

module.exports = mongoose.model('links', LinkSchema);
