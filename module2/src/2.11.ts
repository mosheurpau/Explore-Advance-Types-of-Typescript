{
    // utility type
    // Pick
    type User = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
      }
      
    type UserNameAndAge = Pick<User, "name" | "age">;

    // Omit
    type UserWithoutEmail = Omit<User, "age">;

    // Required
    type UserRequired = Required<User>

    // Partial
    type UserPartial = Partial<User>

    // ReadOnly
    type UserReadOnly = Readonly<User>
    const user1: User = {
        name: "Mr",
        age: 55,
        contactNo: '8978'
    };
    // user1.name = "Mosheur"

    // Record 
    // type MyObj = {
    //     a: string;
    //     b: string;
    // };
    type MyObj = Record<string, string>

    const EmtyObj : Record<string, unknown> = {}

    const obj1: MyObj = {
        a: "aaa",
        b: "bb",
        c: "ccc"
    }
}