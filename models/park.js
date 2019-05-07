const Park = function(name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosuar = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosuar = function(dinosaur) {
  for (i=0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i] === dinosaur) {
      this.dinosaurs.splice(i, 1);
    }
  }
}

Park.prototype.mostPopularDino = function() {
  let dinosSortedByGuestAmount = this.dinosaurs.sort(function (a, b) {
    return a.guestsAttractedPerDay - b.guestsAttractedPerDay;
  });
  return dinosSortedByGuestAmount.pop();
}

Park.prototype.findBySpecies = function(species) {
  const filtered = this.dinosaurs.filter(dino => dino.species === species);
  return filtered;
}

// Park.prototype.removeSpecies = function(species) {
//   for (i=0; i < this.dinosaurs.length; i++) {
//     if (this.dinosaurs[i].species === species) {
//       this.dinosaurs.splice(i, 1)
//     }
//   }
// }

Park.prototype.removeSpecies = function(species) {
  let dinosToRemove = this.findBySpecies(species);
  do {
    let index = this.dinosaurs.findIndex(dino => dino === dinosToRemove.pop());
    this.dinosaurs.splice(index, 1);
  } while (dinosToRemove.length != 0);
}

// const result = words.filter(word => word.length > 6);

Park.prototype.totalVisitsPerDay = function() {
  let total = 0;
  for (i=0; i < this.dinosaurs.length; i++) {
    total += this.dinosaurs[i].guestsAttractedPerDay;
  }
  return total;
}

Park.prototype.totalVisitsPerYear = function() {
  return this.totalVisitsPerDay() * 365;
}

Park.prototype.totalRevenuePerYear = function() {
  return this.totalVisitsPerYear() * this.ticketPrice;
}

module.exports = Park;
