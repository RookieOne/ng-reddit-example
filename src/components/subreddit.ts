import app from '../app'
import RedditService from '../services/reddit'

export default app.component('subreddit', {
  controller: function($scope, $rootScope, $http) {
    var service = new RedditService()

    $scope.searchSubReddit = () => {
      console.log($scope.subreddit)

      service.findPosts($http).then((posts) => {
        console.log(posts)
        $rootScope.posts = posts
      })
    }
  },
  template: require('../templates/subreddit.html')
});