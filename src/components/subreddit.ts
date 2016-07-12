import app from '../app'
import RedditPost from '../models/reddit-post'

class SubRedditController {
  rootScope: any;
  RedditService: any;
  public searching: boolean;
  public searched: boolean;
  public nosubreddit: boolean;
  public posts: Array<RedditPost>;
  public message: string;
  public subreddit: string;

  constructor($rootScope, RedditService) {
    this.rootScope = $rootScope;
    this.RedditService = RedditService;
    this.reset();
  }

  reset() {
    this.searching = false;
    this.searched = false;
    this.nosubreddit = false;
    this.posts = [];
  }

  public searchSubReddit() {
    this.reset();
    this.searching = true
    this.message = `Searching '${this.subreddit}' subreddit`

    this.RedditService.findPosts(this.subreddit).then(this.success, this.failure)
  }

  success = (posts) => {
    this.reset();
    this.searched = true;
    this.message = `Found '${posts.length}' posts for ${this.subreddit} subreddit`
    this.rootScope.posts = posts;
  }

  failure = (error) => {
    this.reset();
    if (error.status == 404) {
      this.nosubreddit = true;
      this.message = "Subreddit doesn't exist";
    }
  }
}

export default app.component('subreddit', {
  controller: SubRedditController,
  template: require('../templates/subreddit.html')
});