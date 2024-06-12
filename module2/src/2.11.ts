{
  // utility types
  // Pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  }

  type Name = Pick<Person, "name">; // select type of "name" and create a new type "Name"
  type NameAge = Pick<Person, "name" | "age">; // select types of "name" & "age" and create a new type "NameAge"


  // Omit
  type ContactInfo = Omit<Person, "name" | "age">; // exclude types of "name" & "age" and create a new type with other property (here "ContactInfo")

  // Required
  type PersonRequired = Required<Person>; // Property value must needed

  // Partial
  type PersonPartial = Partial<Person>;

  // Readonly
  type PersonReadonly = Readonly<Person>;

  const person1: Person = {
    name: 'Mr. ABC',
    age: 200,
    contactNo: "018********",
  };
  person1.age = 27; // allowed as property is not Readonly

  const person2: PersonReadonly = {
    name: 'Mrs. P',
    age: 23,
    contactNo: "0150000****",
  };

  // person2.contactNo = "015********"; // not allowed as person2 is Readonly


  // Record
  // type MyObj = {
  //   a: string;
  //   b: string;
  // };
  type MyObj = Record<string, string>;

  const obj1: MyObj = {
    a: 'aa',
    b: 'bb',
    c: 'cc',
    d: 'dd',
    // e: true, // will give error
  }

  const emptyObj: Record<string, unknown> = {};

  emptyObj.name = "Mr. Rasel";
  emptyObj.age = 27;
  emptyObj.isAdmin = false;



  //
}