angular.module('app').component("home", {
    templateUrl: "./components/home/home.template.html",
    controller: HomeController,
    controllerAs: "model"
});

function HomeController() {
    var model = this;

    model.name = "Home Controller"
}