
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it returns a new rocket object', () => {
      expect(new Rocket()).toBeTruthy();
    });
    test('it should set default attributes if nothing is passed', () => {
      aRocket = new Rocket();
      expect(aRocket.options).toBe();
      
    });

    test("it should set the rocket's name if provided", () => {
      aRocket = new Rocket({name: 'Yael'});
      expect(aRocket.name).toEqual('Yael');
      
    });

    test("it should set the rocket's color if provided", () => {
      aRocket = new Rocket({colour: 'Blue'});
      expect(aRocket.colour).toEqual('Blue');
      
    });

    test('it should set default flying attribute to false if nothing is passed', () => {
      aRocket = new Rocket();
      expect(aRocket.flying).toBe(false);
      
    });
    

  });

  describe('liftOff', () => {
test('liftOff should return true if flying attribute is false', () => {
// arrange
aRocket = new Rocket();
// act
// assert
expect(aRocket.liftOff()).toBe(true);

});  
test('liftOff should set flying true if flying attribute is false', () => {
  // arrange
  aRocket = new Rocket();
  // act
  aRocket.liftOff();
  // assert
  expect(aRocket.flying).toBe(true);
  
  }) 

test('liftOff should return false if flying attribute is true', () => {
    // arrange
    aRocket = new Rocket({flying: true});
    // act
   
    // assert
    expect( aRocket.liftOff()).toBe(false);
    
    }) 
  


});

describe('land', () => {

  test('land should return false if flying is false', () => {
    aRocket = new Rocket();
    // act
   
    // assert
    expect( aRocket.land()).toBe(false);
    
    }) 
  });

test('should retrun true if flying is true', () => {
  aRocket = new Rocket({flying: true});
expect(aRocket.land()).toBe(true);
});

test('should set flying to false if flying is true', () => {
  // arrange
  aRocket = new Rocket({flying: true});
  // act
  aRocket.land();
  // assert
  expect(aRocket.flying).toBe(false);

});

describe('status', ()=> {
  test('status should return a string with the rocket name is flying if flying is true', () => {
  aRocket = new Rocket({name: 'Jay', flying: true});
  expect(aRocket.status()).toBe('Rocket Jay is flying through the sky!');
  })

  test('status should return a string with the rocket name is ready for liftoff if flying is false', () => {
    aRocket = new Rocket({name: 'Jay'});
    expect(aRocket.status()).toBe('Rocket Jay is ready for liftoff!');
    })
    
});

describe('sendCodedSignal', () => {
  test('sendCodedSignal should return string boop if messagecode is undefined', () => {
    aRocket = new Rocket();
    expect(aRocket.sendCodedSignal()).toBe('boop');
  })

  test('sendCodedSignal should return string beep if messagecode is under 10', () => {
    aRocket = new Rocket();
    expect(aRocket.sendCodedSignal(1)).toBe('beep');
  })

  test('sendCodedSignal should return string beep if messagecode is under 10 and flying', () => {
    aRocket = new Rocket({name: 'Jay', flying: true});
    expect(aRocket.sendCodedSignal(1)).toBe('beep beep');
  })

  test('sendCodedSignal should return string beep if messagecode is larger than 10 and flying', () => {
    aRocket = new Rocket({name: 'Jay', flying: true});
    expect(aRocket.sendCodedSignal(11)).toBe('boop boop boop');
  })

  test('sendCodedSignal should return string beep if messagecode is larger than 10', () => {
    aRocket = new Rocket();
    expect(aRocket.sendCodedSignal(11)).toBe('boop beep beep');
  })

});

});

