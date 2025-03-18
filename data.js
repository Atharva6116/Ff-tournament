// Users
var users = [
    {
        mobile: "9876543210",
        wallet: 100,
        blocked: false,
        transactions: [
            { type: "recharge", amount: 100, time: "2025-03-18 10:00 AM" }
        ],
        registeredTournaments: []
    },
    {
        mobile: "9999999999",
        wallet: 50,
        blocked: true,
        transactions: [],
        registeredTournaments: []
    }
];

// Tournaments
var tournaments = [
  {
    id: 1,
    title: "Squad Match - 4 PM",
    prize: 100,
    time: "4:00 PM",
    joined: 5,
    maxPlayers: 40
  },
  {
    id: 2,
    title: "Solo Clash - 6 PM",
    prize: 50,
    time: "6:00 PM",
    joined: 10,
    maxPlayers: 50
  }
];

