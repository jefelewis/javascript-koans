describe("About Functions", function() {

  it("should declare functions", function() {
<<<<<<< HEAD

    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(3);
=======
    
    function add(a, b) {
      return a + b;
    }
    
    expect(add(1, 2)).toBe(FILL_ME_IN);
>>>>>>> origin/master
  });

  it("should know internal variables override outer variables", function () {
    var message = "Outer";
<<<<<<< HEAD

    function getMessage() {
      return message;
    }

=======
    
    function getMessage() {
      return message;
    }
    
>>>>>>> origin/master
    function overrideMessage() {
      var message = "Inner";

      return message;
    }
<<<<<<< HEAD

    expect(getMessage()).toBe("Outer");
    expect(overrideMessage()).toBe("Inner");
    expect(message).toBe("Outer");
=======
    
    expect(getMessage()).toBe(FILL_ME_IN);
    expect(overrideMessage()).toBe(FILL_ME_IN);
    expect(message).toBe(FILL_ME_IN);
>>>>>>> origin/master
  });

  it("should have lexical scoping", function() {
    var variable = "top-level";

    function parentfunction() {
      var variable = "local";

      function childfunction() {
        return variable;
      }
      return childfunction();
    }
<<<<<<< HEAD
    expect(parentfunction()).toBe("local");
  });

  it("should use lexical scoping to synthesise functions", function() {

=======
    expect(parentfunction()).toBe(FILL_ME_IN);
  });

  it("should use lexical scoping to synthesise functions", function() {
    
>>>>>>> origin/master
    function makeIncreaseByFunction(increaseByAmount) {
      return function(numberToIncrease) {
        return numberToIncrease + increaseByAmount;
      };
    }
<<<<<<< HEAD

    var increaseBy3 = makeIncreaseByFunction(3);
    var increaseBy5 = makeIncreaseByFunction(5);

    expect(increaseBy3(10) + increaseBy5(10)).toBe(28);
  });

  it("should allow extra function arguments", function() {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toBe("first");

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg")).toBe(undefined);

=======
    
    var increaseBy3 = makeIncreaseByFunction(3);
    var increaseBy5 = makeIncreaseByFunction(5);
    
    expect(increaseBy3(10) + increaseBy5(10)).toBe(FILL_ME_IN);
  });

  it("should allow extra function arguments", function() {
    
    function returnFirstArg(firstArg) {
      return firstArg;
    }
    
    expect(returnFirstArg("first", "second", "third")).toBe(FILL_ME_IN);
    
    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }
    
    expect(returnSecondArg("only give first arg")).toBe(FILL_ME_IN);
    
>>>>>>> origin/master
    function returnAllArgs() {
      var argsArray = [];

      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }
<<<<<<< HEAD

    expect(returnAllArgs("first", "second", "third")).toBe("first,second,third");
=======
    
    expect(returnAllArgs("first", "second", "third")).toBe(FILL_ME_IN);
>>>>>>> origin/master
  });

  it("should pass functions as values", function() {
    var appendRules = function(name) {
      return name + " rules!";
    };
<<<<<<< HEAD

    var appendDoubleRules = function(name) {
      return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe("John rules!");

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe("Mary totally rules!");

=======
    
    var appendDoubleRules = function(name) {
      return name + " totally rules!";
    };
    
    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe(FILL_ME_IN);
    
    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe(FILL_ME_IN);
      
>>>>>>> origin/master
  });

  it("should use function body as a string", function() {
    var add = new Function("a", "b", "return a + b;");
<<<<<<< HEAD
    expect(add(1, 2)).toBe(3);

=======
    expect(add(1, 2)).toBe(FILL_ME_IN);
     
>>>>>>> origin/master
    var multiply = function(a, b) {
      // An internal comment
      return a * b;
    };
<<<<<<< HEAD
    expect(multiply.toString()).toBe("function (a, b) {
      // An internal comment
      return a * b;
    }");
  });
=======
    expect(multiply.toString()).toBe(FILL_ME_IN);
  });    
>>>>>>> origin/master
});
