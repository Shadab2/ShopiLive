const express = require("express");
const app = express();
const path = require("path");

const http = require("http");
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "/build")));
app.use(express.json());

const socketio = require("socket.io");

const PORT = process.env.PORT || 8080;

const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

var countDownDate = new Date("December 25, 2022 16:37:52").getTime();
const getTime = () => {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

let interval;
io.on("connection", (socket) => {
  if (interval) clearInterval(interval);

  console.log("New User has been connected");
  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", message);
  });
  interval = setInterval(() => io.emit("timer", getTime()), 1000);
  socket.on("disconnect", () => {
    clearInterval(interval);
  });
});

server.listen(PORT, () => {
  console.log("Up and running on the Port " + PORT);
});
