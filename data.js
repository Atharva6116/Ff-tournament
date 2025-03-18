// Check if initial data already exists
if (!localStorage.getItem("tournaments")) {
  const initialTournaments = [];
  for (let i = 1; i <= 30; i++) {
    initialTournaments.push({
      id: i,
      name: `FF Tournament #${i}`,
      prize: 100,
      entryFee: 10,
      time: `7:00 PM`,
      joined: []
    });
  }
  localStorage.setItem("tournaments", JSON.stringify(initialTournaments));
}

if (!localStorage.getItem("users")) {
  const initialUsers = [
    { mobile: "9876543210", balance: 100, blocked: false }
  ];
  localStorage.setItem("users", JSON.stringify(initialUsers));
}

// Load data into JS variables
var tournaments = JSON.parse(localStorage.getItem("tournaments"));
var users = JSON.parse(localStorage.getItem("users"));

// Save updated data back to localStorage
function saveData() {
  localStorage.setItem("tournaments", JSON.stringify(tournaments));
  localStorage.setItem("users", JSON.stringify(users));
}
