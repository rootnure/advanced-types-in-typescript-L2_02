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











  //
}