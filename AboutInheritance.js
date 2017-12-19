function Muppet(age, hobby) {
  this.age   = age;
<<<<<<< HEAD
  this.hobby = hobby;

=======
  this.hobby = hobby; 
  
>>>>>>> origin/master
  this.answerNanny = function(){
	return "Everything's cool!";
  }
}

function SwedishChef(age, hobby, mood) {
  Muppet.call(this, age, hobby);
  this.mood = mood;
<<<<<<< HEAD

=======
  
>>>>>>> origin/master
  this.cook = function() {
    return "Mmmm soup!";
  }
}

SwedishChef.prototype = new Muppet();

describe("About inheritance", function() {
  beforeEach(function(){
    this.muppet      = new Muppet(2, "coding");
  	this.swedishChef = new SwedishChef(2, "cooking", "chillin");
  });
<<<<<<< HEAD

  it("should be able to call a method on the derived object", function() {
    expect(this.swedishChef.cook()).toEqual("Mmmm soup!");
  });

  it("should be able to call a method on the base object", function() {
    expect(this.swedishChef.answerNanny()).toEqual("Everything's cool!");
  });

  it("should set constructor parameters on the base object", function() {
    expect(this.swedishChef.age).toEqual(2);
    expect(this.swedishChef.hobby).toEqual("cooking");
  });

  it("should set constructor parameters on the derived object", function() {
    expect(this.swedishChef.mood).toEqual("chillin");
=======
  
  it("should be able to call a method on the derived object", function() {
    expect(this.swedishChef.cook()).toEqual(FILL_ME_IN);
  });
  
  it("should be able to call a method on the base object", function() {
    expect(this.swedishChef.answerNanny()).toEqual(FILL_ME_IN);
  });
  
  it("should set constructor parameters on the base object", function() {
    expect(this.swedishChef.age).toEqual(FILL_ME_IN);
    expect(this.swedishChef.hobby).toEqual(FILL_ME_IN);
  });
  
  it("should set constructor parameters on the derived object", function() {
    expect(this.swedishChef.mood).toEqual(FILL_ME_IN);
>>>>>>> origin/master
  });
});

// http://javascript.crockford.com/prototypal.html
Object.prototype.beget = function () {
  function F() {}
  F.prototype = this;
  return new F();
}

function Gonzo(age, hobby, trick) {
  Muppet.call(this, age, hobby);
  this.trick = trick;
<<<<<<< HEAD

=======
  
>>>>>>> origin/master
  this.doTrick = function() {
    return this.trick;
  }
}

// no longer need to call the Muppet (base type) constructor
Gonzo.prototype = Muppet.prototype.beget();
// note: if you're wondering how this line affects the below tests, the answer is that it doesn't.
// however, it does do something interesting -- it makes this work:
// var g = new Gonzo(...);
// g instanceOf Muppet // true

describe("About Crockford's inheritance improvement", function() {
  beforeEach(function(){
    this.gonzo = new Gonzo(3, "daredevil performer", "eat a tire");
  });
<<<<<<< HEAD

  it("should be able to call a method on the derived object", function() {
    expect(this.gonzo.doTrick()).toEqual("eat a tire");
  });

  it("should be able to call a method on the base object", function() {
    expect(this.gonzo.answerNanny()).toEqual("Everything's cool!");
  });

  it("should set constructor parameters on the base object", function() {
    expect(this.gonzo.age).toEqual(3);
    expect(this.gonzo.hobby).toEqual("daredevil performer");
  });

  it("should set constructor parameters on the derived object", function() {
    expect(this.gonzo.trick).toEqual("eat a tire");
=======
  
  it("should be able to call a method on the derived object", function() {
    expect(this.gonzo.doTrick()).toEqual(FILL_ME_IN);
  });
  
  it("should be able to call a method on the base object", function() {
    expect(this.gonzo.answerNanny()).toEqual(FILL_ME_IN);
  });
  
  it("should set constructor parameters on the base object", function() {
    expect(this.gonzo.age).toEqual(FILL_ME_IN);
    expect(this.gonzo.hobby).toEqual(FILL_ME_IN);
  });
  
  it("should set constructor parameters on the derived object", function() {
    expect(this.gonzo.trick).toEqual(FILL_ME_IN);
>>>>>>> origin/master
  });
});
