// data.js

// Default tournament list
var tournaments = [
  {
    id: "t1",
    name: "Free Fire Solo Rush",
    prize: 500,
    time: "6:00 PM",
    entryFee: 20,
    joined: 0
  },
  {
    id: "t2",
    name: "Squad Showdown",
    prize: 1000,
    time: "8:00 PM",
    entryFee: 40,
    joined: 0
  },
  {
    id: "t3",
    name: "Ultimate Survival",
    prize: 1500,
    time: "10:00 PM",
    entryFee: 50,
    joined: 0
  }
];

// Check and load users from localStorage if already saved
var users = JSON.parse(localStorage.getItem("users")) || [];
