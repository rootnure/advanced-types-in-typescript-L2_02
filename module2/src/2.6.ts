{
  //constraints
  const addCourseToStudent = <T extends { id: number; name: string; email: string; }>(student: T): object => {
    const course = 'Next Level Web Development';

    return {
      ...student,
      course
    }
  }

  const student3 = addCourseToStudent({ id: 222, name: 'Mr. X', email: 'x@mail.com', fake: 'fake' })

  const student1 = addCourseToStudent({
    id: 125,
    name: 'Nur',
    batch: 8,
    email: 'nur@mail.com',
    devType: 'JLWD',
  });

  const student2 = addCourseToStudent({
    id: 2534,
    name: 'Rifat',
    batch: 3,
    email: 'rifat@mail.com',
    hasWatch: true,
  });







  console.log({ student1, student2, student3 });
  //
}