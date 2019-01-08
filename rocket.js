class Rocket {
  constructor(options = {}) {
    this.name = options.name || this.randomName();
    this.colour = options.colour || this.randomColour();
    this.flying = options.flying || false;
  }

  liftOff() {
    if (this.flying) {
      return false;
    }
    this.flying = true;
    return true;
  }

  land() {
    if (!this.flying) {
      return false;
    }
    this.flying = false;
    return true;
  }

  status() {
    if (this.flying) {
      return `Rocket ${this.name} is flying through the sky!`
    }
    return `Rocket ${this.name} is ready for liftoff!`
  }

  // @TODO: Add new method here with more complexity.

  // helper methods - don't need to test these!

  randomName() {
    const prefixes = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"],
          suffixes = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"];
    const randomPrefix = this.getRandom(prefixes),
          randomSuffix = this.getRandom(suffixes);
    const capitalizedPrefix = randomPrefix.charAt(0).toUpperCase() + randomPrefix.slice(1);

    return `${capitalizedPrefix} ${randomSuffix.toUpperCase()}`;
  }

  randomColour() {
    const colour_list = ["red", "yellow", "blue", "green", "purple", "orange"];
    return this.getRandom(colour_list);
  }

  getRandom(collection) {
    return collection[Math.floor(Math.random() * collection.length)];
  }
}

module.exports = Rocket;
