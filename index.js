var Alexa = require('alexa-sdk');


exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.appId = "your-alexa-skill-id";
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
  'LaunchRequest': function () {
    this.emit('Welcome to the Alexa Development: Learn to Build Skills for Alexa course! Be sure to check out our forum for assistance or help at www.selfeducation.club!');
  }

};
