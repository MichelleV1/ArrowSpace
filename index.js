//initialize dotenv 
const dotenv = require('dotenv');
dotenv.config()
const ConversationV1 = require('watson-developer-cloud/conversation/v1'); 
//create a new instance of the conversation service
const conversation = new ConversationV1({

    
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
       version_date: ConversationV1.VERSION_DATE_2016_09_20
});

//Make a request to watson conversation by using the message API and print watson's response
conversation.message({
    input:{
        text: ' '
    },
      workspace_id: process.env.WORKSPACE_ID
},
function(err, response)
{
    if(err)
    {
        console.error(err);
    }
    else{
        console.log(JSON.stringify(response, null, 2));
    }

});
