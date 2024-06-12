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


  // Tuple
  const createArrayWithTuple = <T, X>(param1: T, param2: X): [T, X] => {
    return [param1, param2];
  };


  const response1 = createArrayWithTuple<string, number>('BD', 222);
  const responseGeneric = createArrayWithTuple<string, { name: string }>('Bangladesh', { name: 'Asia' });


  const addCourseToStudent = <T>(student: T): object => {
    const course = 'Next Level Web Development';

    return {
      ...student,
      course
    }
  }

  const updatedStudent = addCourseToStudent<{ name: string; batch: number, email: string, devType: string }>({ name: 'Nur', batch: 8, email: 'nur@mail.com', devType: 'JLWD' });




  console.log({ res1, resGeneric, resGenericObj, response1, responseGeneric, updatedStudent });
  //
}