var app = angular.module('movieApp',[])
app.controller('MovieController', MovieController);

console.log("The controller is linked");

function MovieController() {
    var vm = this;

    vm.moviesToWatch = [
      {
        title: 'Inside Out',
      },
      {
        title: 'Star Wars: Episode VII',
      },
      {
        title: 'Shaun the Sheep',
      },
      {
        title: 'The Big Short',
      },
      {
        title: 'Steve Jobs',
      },
      {
        title: 'Se7en',
      },
      {
        title: 'Trainwreck',
      }
    ];


    vm.movie = {};
    vm.addMovie = function () {
     var newMovie = vm.movie;
     vm.movie = {};
     vm.moviesToWatch.push(newMovie);
   };

   vm.deleteMovie = function (movie) {
     var movieIndex = vm.moviesToWatch.indexOf(movie);
     vm.moviesToWatch .splice(movieIndex, 1);
     console.log("i was clicked and removed")
   };


  };
