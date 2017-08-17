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
                    speech:  "hallo",
                    displayText:  "hallo",
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
