describe("About Mutability", function() {

  it("should expect object properties to be public and mutable", function () {
    var aPerson = {firstname: "John", lastname: "Smith" };
    aPerson.firstname = "Alan";
<<<<<<< HEAD

    expect(aPerson.firstname).toBe("Alan");
=======
    
    expect(aPerson.firstname).toBe(FILL_ME_IN);
>>>>>>> origin/master
  });

  it("should understand that constructed properties are public and mutable", function () {
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
      this.lastname  = lastname;
    }
    var aPerson = new Person ("John", "Smith");
    aPerson.firstname = "Alan";
<<<<<<< HEAD

    expect(aPerson.firstname).toBe("Alan");
=======
    
    expect(aPerson.firstname).toBe(FILL_ME_IN);
>>>>>>> origin/master
  });

  it("should expect prototype properties to be public and mutable", function () {
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    Person.prototype.getFullName = function() {
      return this.firstname + " " + this.lastname;
    };
<<<<<<< HEAD

    var aPerson = new Person ("John", "Smith");
    expect(aPerson.getFullName()).toBe("John Smith");

    aPerson.getFullName = function() {
      return this.lastname + ", " + this.firstname;
    };

    expect(aPerson.getFullName()).toBe("Smith, John");
=======
    
    var aPerson = new Person ("John", "Smith");
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);
    
    aPerson.getFullName = function() {
      return this.lastname + ", " + this.firstname;
    };
    
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);
>>>>>>> origin/master
  });

  it("should know that variables inside a constructor and constructor args are private", function () {
    function Person(firstname, lastname)
    {
      var fullName = firstname + " " + lastname;
<<<<<<< HEAD

=======
      
>>>>>>> origin/master
      this.getFirstName = function() { return firstname; };
      this.getLastName  = function() { return lastname; };
      this.getFullName  = function() { return fullName; };
    }
    var aPerson = new Person ("John", "Smith");

    aPerson.firstname = "Penny";
    aPerson.lastname  = "Andrews";
    aPerson.fullName  = "Penny Andrews";
<<<<<<< HEAD

    expect(aPerson.getFirstName()).toBe("John");
    expect(aPerson.getLastName()).toBe("Smith");
    expect(aPerson.getFullName()).toBe("John Smith");
=======
    
    expect(aPerson.getFirstName()).toBe(FILL_ME_IN);
    expect(aPerson.getLastName()).toBe(FILL_ME_IN);
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);
>>>>>>> origin/master

    aPerson.getFullName = function() {
      return aPerson.lastname + ", " + aPerson.firstname;
    };
<<<<<<< HEAD

    expect(aPerson.getFullName()).toBe("Andrews, Penny");
=======
    
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);
>>>>>>> origin/master
  });

});
