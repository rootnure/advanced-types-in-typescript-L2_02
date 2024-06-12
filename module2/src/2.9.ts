{
  // conditional type in ts

  // type a1 = null;
  type a1 = number;
  type b1 = string;

  type x = a1 extends null ? true : false; // conditional type

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  // let m: y;


  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  }

  // keyof Sheikh         "bike" | "car" | "ship" | "plane"

  // car ase kina / bike ase kina / ship ace kina / tractor ase kina
  // type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasBike = CheckVehicle<"car">



  // console.log(typeof m);
  //
}