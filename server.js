const express = require("express");
const app = express();
const port = 3000;

const battle = require("./battle.json");

app.get("/", function (req, res) {
  res.send("Express this...");
});

app.put("/upVote/:videoId", function (req, res) {
  res.send("You have registered an up vote");
});

app.put("/downVote/:videoId", function (req, res) {
  res.send("You have registered a down vote");
});

app
  .route("/comments/:videoId")
  .get(function (req, res) {
    res.send("A List of all comments on the video");
  })
  .put(function (req, res) {
    res.send("You have added a comment");
  });

app.delete("/comments/:videoId/:commentId", function (req, res) {
  let commentId = req.params.commentId;
  res.send(`You have deleted comment ${commentId}`);
});

app
  .route("/battle")
  .get(function (req, res) {
    console.log(battle);
    res.json(battle);
  })
  .post(function (req, res) {
    res.send("Create a battle");
  });

app
  .route("/battle/:battleId")
  .get(function (req, res) {
    console.log(req.params);
    let battleId = req.params.battleId;
    res.send(`You found the battle with the id: ${battleId}`);
  })
  .put(function (req, res) {
    res.send("Update this battle");
  })
  .delete(function (req, res) {
    let battleId = req.params.battleId;
    res.send(`You have deleted battle id: ${battleId}`);
  });

app
  .route("/user")
  .get(function (req, res) {
    res.send("Get the user list");
  })
  .post(function (req, res) {
    res.send("Create a user");
  });

app
  .route("/user/:userId")
  .get(function (req, res) {
    console.log(req.params);
    let userId = req.params.userId;
    res.send(`You found the user with the id: ${userId}`);
  })
  .put(function (req, res) {
    res.send("Update this user");
  })
  .delete(function (req, res) {
    let userId = req.params.userId;
    res.send(`You have deleted user id: ${userId}`);
  });

app
  .route("/video")
  .get(function (req, res) {
    res.send("Get the video list");
  })
  .post(function (req, res) {
    res.send("Create a Video");
  });

app
  .route("/video/:videoId")
  .get(function (req, res) {
    let videoId = req.params.videoId;
    res.send(`You found the video with the id: ${videoId}`);
  })
  .put(function (res, req) {
    res.send("You have updated this video");
  })
  .delete(function (res, req) {
    let videoId = req.params.videoId;
    res.send(`You have deleted video ic: ${videoId}`);
  });

app.listen(port, function () {
  console.log("The app is running... You better go catch it.");
});
