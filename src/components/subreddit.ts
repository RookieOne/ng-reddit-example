import app from '../app'

export default app.component('subreddit', {
  controller: function($scope, $rootScope, $http, RedditService) {
    $scope.searchSubReddit = () => {
      $scope.searching = true
      $scope.searched = false
      $scope.nosubreddit = false

      $scope.message = `Searching '${$scope.subreddit}' subreddit`
      RedditService.findPosts($scope.subreddit).then((posts) => {
        $scope.searching = false
        $scope.searched = true
        $scope.message = `Found '${posts.length}' posts for ${$scope.subreddit} subreddit`
        $rootScope.posts = posts
      }, (error) => {
        $scope.searching = false
        $scope.nosubreddit = true
        $scope.message = "Subreddit doesn't exist"
        $rootScope.posts = []
      })
    }
  },
  template: require('../templates/subreddit.html')
});