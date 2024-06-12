{
  // generic type

  // type GenericArray<param> = Array<param>;
  type GenericArray<T> = Array<T>; // industrialized code

  // const rollNumbers: number[] = [2, 9, 4, 8];
  // const rollNumbers: Array<number> = [2, 9, 4, 8];
  const rollNumbers: GenericArray<number> = [2, 9, 4, 8];

  // const mentors: string[] = ['Mr.X', 'Mr. Y', 'Mr.Z'];
  const mentors: GenericArray<string> = ['Mr.X', 'Mr. Y', 'Mr.Z'];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const add = (x: number, y: number) => x + y;

  add(30, 20);


  // Re-use in array of object
  const user: GenericArray<object> = [
    {
      name: 'Nur',
      age: 25,
    },
    {
      name: 'Ripon',
      age: '24',
    },
    {
      roll: 'admin',
    }
  ]

  // Specify object property with type
  const newUser: GenericArray<{ name: string; age: number }> = [
    {
      name: 'Nur',
      age: 25,
    },
    {
      name: 'Ripon',
      age: 24,
    },
  ]


  // generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const person: GenericTuple<string, string> = ['Mr. X', 'Mrs. Y'];

  const userWithID: GenericTuple<number, { name: string; email: string }> = [41, { name: 'Rifat', email: 'rifat@mail.com' }];









  //
}