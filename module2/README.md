# Exploring Advanced Types in TypeScript

This document provides an overview of advanced types in TypeScript, going beyond the basic types to explore features that offer more control and expressiveness.

## Advanced Types

1. **Union and Intersection Types**

   - **Union Types:** Allow a variable to hold values of different types using the `|` symbol.

     ```typescript
     let id: string | number;
     id = "123"; // OK
     id = 123; // OK
     ```

   - **Intersection Types:** Combine multiple types into one using the `&` symbol.

     ```typescript
     interface Nameable {
       name: string;
     }
     interface Ageable {
       age: number;
     }
     type Person = Nameable & Ageable;
     let p: Person = { name: "John", age: 30 };
     ```

2. **Type Guards**

   - Help narrow down the type of a variable within a conditional block, often used with union types.

     ```typescript
     function printId(id: string | number) {
       if (typeof id === "string") {
         console.log(id.toUpperCase());
       } else {
         console.log(id);
       }
     }
     ```

3. **Type Aliases**

   - Create a new name for an existing type.

     ```typescript
     type UserID = string | number;
     function getUser(id: UserID) {
       /*...*/
     }
     ```

4. **Nullable Types**

   - Control how `null` and `undefined` are handled using the `strictNullChecks` compiler option.

5. **Optional Properties and Parameters**

   - Use `?` to mark properties or parameters as optional.

     ```typescript
     interface User {
       name: string;
       email?: string;
     }
     ```

6. **Generics**

   - Write reusable components that work with different types.

     ```typescript
     function identity<T>(arg: T): T {
       return arg;
     }
     let output = identity<string>("myString");
     ```

7. **Mapped Types**

   - Create new types based on existing ones by applying transformations (e.g., `Readonly<T>`, `Partial<T>`).

     ```typescript
     type Readonly<T> = {
       readonly [P in keyof T]: T[P];
     };
     ```

8. **Conditional Types**

   - Express types that depend on a condition.

     ```typescript
     type IsNumber<T> = T extends number ? "yes" : "no";
     ```

9. **`unknown` Type**

   - Represents a value with an unknown type, requiring type checks before use.

     ```typescript
     let value: unknown;
     if (typeof value === "string") {
       let str: string = value;
     }
     ```

10. **`never` Type**

    - Represents the type of values that never occur (e.g., functions that always throw errors).

      ```typescript
      function throwError(message: string): never {
        throw new Error(message);
      }
      ```
