import app from '../app'
import { Promise } from 'es6-promise'

class RedditPost {
  public thumbnail: string;
  public title: string;
  public url: string;
  public description: string;
  public author: string;
  public upVotes: number;
  public numberOfComments: number;

  constructor(data) {
    this.title = data.title;
	  this.url = data.url;
    this.description = data.selftext;
	  this.thumbnail = data.thumbnail;
    this.author = data.author;
    this.upVotes = data.ups;
    this.numberOfComments = data.num_comments;
  }
}

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