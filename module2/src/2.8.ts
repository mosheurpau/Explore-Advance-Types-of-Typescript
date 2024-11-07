{
   // promise
type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };
  
  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
  
    const data = await response.json();
    return data; 
  };
  
  // Handle the promise returned by getTodo()
  getTodo().then(todo => {
    console.log("Todo from API:", todo);
  });
  
  
  type Something = { something: string };
  
  // simulate
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };
  
  // calling create promise function
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    console.log(data); // This will now execute
    return data; 
  };
  
  // Handle the promise returned by showData()
  showData().then(data => {
    console.log("Data from showData:", data);
  });
    //
  }