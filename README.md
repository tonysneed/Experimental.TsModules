# Learning TypeScript Modules

1. Use `npm` to init a new `package.json` file.

  - `npm init -y`

2. Add `.gitignore`.

  - Use gist: https://gist.github.com/tonysneed/ae009c98ab77aaf70e9a
  
3. Add `src\ts` folders

4. Add a `tsconfig.json` file.

    ```js
    "compilerOptions": {
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "sourceMap": true
    }
    ```
    
5. Add a Startup.ts file to the `src\ts` folder.

    ```js
    class Startup {
        public static main(): number {
            console.log('Hello World');
            return 0;
        }
    }
    ```
    
6. Configure the task runner
   - Uncomment the second block tto use sconfig.json from the open folder.
   - Remove the rest of the file contents.
   
7. Press `Cmd+B` to compile the typescript.

