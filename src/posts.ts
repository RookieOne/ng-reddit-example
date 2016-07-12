import app from './app'

export default app.component('posts', {
  controller: function($scope, $http) {
    $scope.message = "Hello Posts"
    $http.get("http://www.reddit.com/r/pics/search.json?q=kittens&sort=new")
      .then(function(response) {
        console.log("result", response.data.data.children)
        $scope.posts = response.data.data.children
      })
  },
  templateUrl: 'templates/posts.html'
});