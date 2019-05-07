const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaurs = []


  beforeEach(function () {
    dinosaur1 = new Dinosaur('T-Rex', 'carnivore', 200);
    dinosaur2 = new Dinosaur('Velociraptor', 'carnivore', 100);
    dinosaur3 = new Dinosaur('Diplodocus', 'herbivore', 50)
    dinosaur4 = new Dinosaur('Triceratops', 'herbivore', 50)
    dinosaurs = [dinosaur1, dinosaur2]
    park = new Park('Jeff World', 100, dinosaurs);

  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jeff World')
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2)
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosuar(dinosaur3);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosuar(dinosaur2);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.mostPopularDino();
    assert.strictEqual(actual, dinosaur1)
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosuar(dinosaur1)
    const actual = park.findBySpecies('T-Rex');
    assert.strictEqual(actual.length, 2)
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park.addDinosuar(dinosaur1);
    park.removeSpecies('T-Rex');
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to calculate the total number of visitors per day', function() {
    const actual = park.totalVisitsPerDay();
    assert.strictEqual(actual, 300)
  })

  it('should calculate the total number of visitors per year', function() {
    const actual = park.totalVisitsPerYear();
    assert.strictEqual(actual, 109500)
  })

  it('should calculate the total revenue from ticket sales for one year', function() {
    const actual = park.totalRevenuePerYear();
    assert.strictEqual(actual, 10950000)
  })

});
