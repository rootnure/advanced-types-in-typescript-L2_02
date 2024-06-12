{
  // promise

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  }

  /* API call for data */
  const getTodo = async (todoId: number): Promise<Todo> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const data = await response.json();
    console.log(data);
    return data;
  }

  getTodo(2);


  type MSG = {
    msg: string;
  }

  /* simulate */
  const createPromise = (): Promise<MSG> => {
    return new Promise<MSG>((resolve, reject) => {
      const data: MSG = { msg: 'something' };
      if (data) {
        resolve(data);
      } else {
        reject({ msg: 'failed to load data' })
      }
    });
  };

  /* calling create promise function */
  const showData = async () => {
    const response: MSG = await createPromise();
    console.log(response);
  }

  showData();

  //
}