{
  // generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  }

  type Owner = 'bike' | 'car' | 'ship'; // manually

  type Owner2 = keyof Vehicle;

  const person1: Owner = 'car';

  const person2: Owner2 = "ship";


  const user = {
    name: 'Mr. Nur',
    age: 25,
    address: 'dha'
  };

  const phone = {
    brand: 'Nokia',
    model: '6s',
    price: 17800,
    releaseYear: 2020,
  };

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  }

  const result1 = getPropertyValue(user, 'name');

  const result2 = getPropertyValue(phone, 'model');



  console.log({ person1, person2, result1, result2 });
  //
}