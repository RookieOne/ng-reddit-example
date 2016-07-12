import app from '../app'
import RedditPost from '../models/reddit-post'
import * as _ from 'underscore';

class PostFiltersController {
  rootScope: any;
  commentsSortAsc: boolean;

  constructor($rootScope) {
    this.rootScope = $rootScope;
    this.commentsSortAsc = true;
  }

  public sortByComments() {
    var posts = _.sortBy(this.rootScope.posts, (p: RedditPost) => p.numberOfComments);
    if (this.commentsSortAsc) {
      this.commentsSortAsc = false
      this.rootScope.posts = posts
    } else {
      this.commentsSortAsc = true
      this.rootScope.posts = posts.reverse()
    }
  }
}

export default app.component('postfilters', {
  controller: PostFiltersController,
  template: require('../templates/post-filters.html')
});