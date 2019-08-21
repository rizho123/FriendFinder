var friends = require("../data/friends.js")

module.exports = function (app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends)
    });

    app.post("/api/friends"), function(req, res) {
        var input = req.body;
        var responses = input.scores;

        var matchN = '';
        var matchI = '';
        var difference = 10000;

        for (var i in friends) {
            var diff = 0;
            for (var j in response) {
                diff += Math.abs(friends[i].scores[j] - responses[j]);
            }

            if(diff < difference) {
                difference = diff;
                matchN = friends[i].name;
                matchI = friends[i].photo;
            }
        }
        friends.push(input);
        res.json({status: "OK", matchN: matchN, matchI: matchI})
    }
}