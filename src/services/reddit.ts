import app from '../app'
import { Promise } from 'es6-promise'
import RedditPost from '../models/reddit-post'

export default class RedditService {
  http: any;
  constructor($http) {
    this.http = $http
  }
  public findPosts(subreddit): Promise<Array<RedditPost>> {
    let url = `http://www.reddit.com/r/${subreddit}.json?sort=new`
    return this.http.get(url)
      .then((response) => {
        console.log(response)
        return response.data.data.children.map((data) => new RedditPost(data.data))
      })
  }
}

app.service('RedditService', ($http) => {
  return new RedditService($http)
})