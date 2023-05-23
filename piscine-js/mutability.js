const person = {
    name: 'John',
    age: 30,
    country: 'US'
  };
  
  const clone1 = JSON.parse(JSON.stringify(person));
  const clone2 = JSON.parse(JSON.stringify(person));
  
  const samePerson = person;
  
  person.age += 1;
  person.country = 'FR';
  
  console.log(person);
  console.log(clone1);
  console.log(clone2);
  console.log(samePerson);
  