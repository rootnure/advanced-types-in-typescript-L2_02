{
  // mapped types

  /* Normal map method in array */
  const arrOfNumbers: number[] = [1, 2, 7];
  // const arrOfString: string[] = ['1', '2', '7'];
  const arrOfString: string[] = arrOfNumbers.map(number => number.toString());


  /* mapped type */
  type AreaNumber = {
    height: number;
    weight: number;
  };

  // manually type change
  type AreaString = {
    height: string;
    weight: string;
  }

  // update type using mapped
  type AreaStringMapped = {
    // [key in 'height' | 'width']: string; // hard coded
    [key in keyof AreaNumber]: string; // keyof
  }







  // console.log({ arrOfNumbers, arrOfString });
  //
}