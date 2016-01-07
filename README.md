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

8. Install karma and jasmine

    ```shell
    npm install --save-dev karma jasmine-core phantomjs karma-jasmine karma-phantomjs-launcher
    ```
    
9. Install karma-cli globally.

    ```shell
    npm install karma-cli -g
    ```
    
10. Configure karma

    ```shell
    karma init
    ```

  - Specify configuration parameters
  
    + `jasmine` for the testing framework
    + `PhantomJS` for the browser
    + `src/js/*.js` for input files
    + `false` for `singleRun`
    
11. Install `tsd` globally.

    ```shell
    npm install tsd -g
    ```

12. Install typings for jasminei.

    ```shell
    tsd install jasmine
    ```
