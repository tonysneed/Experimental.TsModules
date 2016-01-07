/// <reference path="greeter" />

module App {
    export class World {
        constructor(public name: string) { 
        }
        
        sayHello(): string {
            var greeter: App.Greeter = new App.Greeter(this.name);
            return greeter.greet();
        }
    }
}