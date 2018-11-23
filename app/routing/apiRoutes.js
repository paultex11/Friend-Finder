var friendsData = require("../data/friends");

module.exports = function (app) {

    // GET REQUEST TO SEND IN friendsData ARRAY OF OBJECT

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // POST REQUEST TO TAKE IN NEWLY ENTERED DATA AND PASS ALONG ANALYSED closestFriend OBJECT

    app.post("/api/friends", function (req, res) {

        var counterScore = 50;
        var newFriendScore = req.body.scores;
        var closestFriend;


        for (var i = 0; i < friendsData.length; i++) {

            var currentFriendScore = friendsData[i].scores;
            var totalScore = 0;


            for (var j = 0; j < currentFriendScore.length; j++) {
                totalScore += Math.abs(currentFriendScore[j] - newFriendScore[j]);
            }

            if (totalScore <= counterScore) {
                counterScore = totalScore;
                closestFriend = friendsData[i];
            }
        }

        // console.log(friendsData);
        // console.log("==============================================")
        // console.log(req.body);
        // console.log("==============================================")   
        // console.log(res.json);

        friendsData.push(req.body);
        res.json(closestFriend);
    });
};