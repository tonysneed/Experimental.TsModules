var App;
(function (App) {
    var World = (function () {
        function World(name) {
            this.name = name;
        }
        World.prototype.sayHello = function () {
            var greeter = new App.Greeter(this.name);
            return greeter.greet();
        };
        return World;
    })();
    App.World = World;
})(App || (App = {}));
//# sourceMappingURL=world.js.map