{
  // Functions with Generic

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };


  const res1 = createArray('BD');
  const resGeneric = createArrayWithGeneric<string>('Bangladesh');

  interface User {
    id: number;
    name: string;
  };

  const resGenericObj = createArrayWithGeneric<User>({ id: 22156, name: 'Mr. Rasib' });







  //
}