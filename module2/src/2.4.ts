{
  // Generic with Interface

  type GenericArray<T> = Array<T>;

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    {
      name: 'Nur',
      age: 25,
    },
    {
      name: 'Rifat',
      age: 24,
    },
  ]


  // interface - generic

  interface Developer<T, Y = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: Y
  }

  interface AdataWatch {
    brand: string;
    model: string;
    display: string;
  };

  interface AppleWatch {
    brand: string;
    model: string;
    canTrackHeart: boolean;
    canTrackSleep: boolean;
  };

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  const poorDeveloper: Developer<AdataWatch> = {
    name: 'Raju',
    computer: {
      brand: 'Dell',
      model: 'Inspiron 3',
      releaseYear: 2021,
    },
    smartWatch: {
      brand: 'Adata',
      model: 'X344a',
      display: 'OLED',
    },
  }

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: 'Rakib',
    computer: {
      brand: 'Apple',
      model: 'Mac M1',
      releaseYear: 2023,
    },
    smartWatch: {
      brand: 'Apple',
      model: 'Apple Watch 3 Pro',
      canTrackHeart: true,
      canTrackSleep: true,
    },
    bike: {
      model: 'Yamaha',
      engineCapacity: '100cc',
    }
  }










  //
}