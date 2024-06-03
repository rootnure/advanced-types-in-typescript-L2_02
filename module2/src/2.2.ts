{
  /* interface in ts */


  // using type alias to define type
  type User1 = {
    name: string;
    age: number;
  };

  // using interface to define type
  interface User2 {
    name: string;
    age: number;
  }


  // extend property in type alias using intersect
  type UserWithRole1 = User1 & { role: string };

  // extend property in interface
  interface UserWithRole2 extends User2 {
    role: string;
  }


  // extending type alias using interface
  interface UserWithRoleAndSalary1 extends UserWithRole1 {
    salary: number;
  }

  /* ================================================================ */

  const user1: User1 = {
    name: 'Khan',
    age: 30,
  };

  const user2: User2 = {
    name: 'Saheb',
    age: 20,
  }


  const userWithRole1: UserWithRole1 = {
    name: 'Ali',
    age: 31,
    role: 'Worker',
  }

  const userWithRole2: UserWithRole2 = {
    name: 'Bibi',
    age: 29,
    role: 'Ruler',
  }

  const userWithRoleAndSalary1: UserWithRoleAndSalary1 = {
    name: 'Saidur',
    age: 23,
    role: 'Trainee',
    salary: 12000,
  }


  // in js --> object -> obj, array -> obj, function -> obj


  /* interface for array in ts */

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  /* ================================================================ */

  const rollNumbers1: Roll1 = [1, 2, 3, 5, 6];
  const rollNumbers2: Roll2 = [1, 2, 3, 5, 6];



  /* interface for function in ts */

  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  /* ================================================================ */

  const add1: Add1 = (num1, num2) => num1 + num2;

  const add2: Add2 = (num1, num2) => num1 + num2;

  console.log({ result1: add1(5, 7), result2: add2(10, 12) });



  // console.log({ rollNumbers1, rollNumbers2 });
  // console.log({ user1, user2, userWithRole1, userWithRole2, userWithRoleAndSalary1 });
  //
}