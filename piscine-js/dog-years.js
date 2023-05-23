function dogYears(planet, seconds) {
    const orbitalPeriods = {
      earth: 1.0,
      mercury: 0.2408467,
      venus: 0.61519726,
      mars: 1.8808158,
      jupiter: 11.862615,
      saturn: 29.447498,
      uranus: 84.016846,
      neptune: 164.79132
    };
  
    const earthSeconds = 31557600;
    const dogYearsPerEarthYear = 7; 
  
    let earthYears = seconds / earthSeconds;
    let planetYears = earthYears / orbitalPeriods[planet];
    let dogYearsOnPlanet = planetYears * dogYearsPerEarthYear;
  
    return Number(dogYearsOnPlanet.toFixed(2));
  }
  