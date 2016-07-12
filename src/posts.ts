import app from './app'

export default function() {
  return app.app.component('posts', {
    controller: function($scope) {
      $scope.message = "Hello Posts"
    },
    templateUrl: 'templates/posts.html'
  })
};