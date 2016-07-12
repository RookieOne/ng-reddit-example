import app from '../app'

export default app.component('posts', {
  bindings: {
    posts: '='
  },
  controller: function($scope) {
  },
  template: require('../templates/posts.html')
});