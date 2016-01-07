var App;
(function (App) {
    var Startup = (function () {
        function Startup() {
        }
        Startup.main = function () {
            console.log('Hello World');
            return 0;
        };
        return Startup;
    })();
    App.Startup = Startup;
})(App || (App = {}));
//# sourceMappingURL=Startup.js.map