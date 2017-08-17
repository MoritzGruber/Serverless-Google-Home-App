# Build a Serverless Google Home App

In this blog article, I want to show you how to build your own google voice app. For Natural language processing, we will use API.AI and our backend will run on a google cloud function, general speaking of serverless functions
![achetecture](./archetecture.png "architecture")

## Github
You can find the whole project here on [Github](https://github.com/MoritzGruber/assistant)

## Frontend 
To speak of frontend seems a little bit of first. Since don't build any visual interface. But our natural language processing interface is the closest unit interacting with the end user. 

You can build your own natural language processing unit or use an existing framework such as API.AI. Building on this framework will safe us a lot of time. 

### Chuck Norris
As an example, we will build a Chuck Norris joke application. So first we want to create a new Project in API.Ai and make our first intent. 

Our application will just need one intent, since its only task is, to tell a joke. Every different task can be represented by an intent. 

In our Intent, we want to list different phrases that a user could use. After configuration your intent could look similar to this:
![achetecture](./apiaiintent.png "marketecture")

### Category
As an advanced feature, we want API.AI to detect a category for a joke if we name one in our sentence. The category will be passed as a variable to our backend application and can be handled as you see later.


## Backend
In general, you could use any regular rest service as the backend for our application. From own server to cloud container over to serverless functions. 

I choose serverless functions because of its the cheapest and option aswell the option whit least configuration needed. You don't have to worry about configuring the google cloud firewall or creating long setup scripts. 
Furthermore our application won't has a balanced load usage, instead, it will be more like some sparks. This why cloud functions are a perfect match also.

The downside in the google cloud is, you are limited to nodes. So you can only write this functions in javascript for now. But there other cloud providers, such as IBM blue mix, that has more diversity in stock.

To collect our jokes we use the free service
[api.chucknorris.io](https://api.chucknorris.io/) 
So my nodejs code ended up looking like this:

```javascript
var request = require('request');

exports.agent = function(req, res) {
    var category;
    var topics = ["dev","movie","food","celebrity","science","political","sport","religion","animal","music","history","travel","career","money","fashion"]

    var url = 'https://api.chucknorris.io/jokes/random';
    var returntext;
    try {
        
        var category = req.body.result.parameters.category
        if(topics.indexOf(category) > -1){
            url = url + "?category=" + category;
        }
        request(url, function (error, response, body) {
            if(error){
                console.log(error);
            } else {
                returntext = JSON.parse(body).value;
                return res.json({
                    speech:  returntext,
                    displayText:  returntext,
                    source: 'chucknorris-function'
                });
            }
        });
    } catch (error) {
        console.log('Error extracting req: '+ error);
        return res.json({
                    speech:  "error",
                    displayText:  "error",
                    source: 'chucknorris-function'
                });
    }
};

```
### Deploy 
To deploy this function you need to be logged in in you google cloud. If you haven't created a bucket yet, you will create one with:

```bash
gsutil mb -p chucknorrisjokes-174821 gs://chucknorrisjokes 
```
After that you can deploy your function to this bucket with:

```bash
gcloud beta functions deploy agent --stage-bucket chucknorrisjokes --trigger-http 

```

### Connect to API.AI
The cli will return a URL, you will need to link this with you API.AI project. And don't forget to enable the webhook in your intent.
![webhook](./webhook.png)



## Testing 
### Emulator
You might have noticed that uploading you function took up to 2 minutes. That's why there is a local emulator for google cloud functions. You can find an [instruction](https://cloud.google.com/functions/docs/emulator) for installation of the npm package here.
You can run the function locally with:

```bash
functions deploy agent --trigger-http
```


### ngrok
Normally you can't connect straight to our localhost from API.AI. That's why we use the tunneling service [ngrok](https://ngrok.com/) to connect to our local function to API.AI. We just have to replace the webhook URL with URL we got from ngrok. The URL should then look similar to this: 

```
https://ca87c845.ngrok.io/chucknorrisjokes-c090c/us-central1/agent
```

### Conclusion
Thanks for reading through my post. For feedback or questions feel free to contact me. 




#### Cheers!

#### Moritz Gruber

[Website]()

[Github]()

[Twitter]()

[Xing]()

[LinkedIn]()



