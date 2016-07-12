import { Promise } from 'es6-promise'

class RedditPost {
  public thumbnail: string;
  public title: string;
  public url: string;
  public description: string;
}

export default class RedditService {
  public findPosts($http): Promise<Array<RedditPost>> {
    return $http.get("http://www.reddit.com/r/pics/search.json?q=kittens&sort=new")
      .then((response) => {
        return response.data.data.children.map((data) => {
          return {
            title: data.data.title,
            url: data.data.url,
            description: data.data.selftext,
            thumbnail: data.data.thumbnail,
          }
        })
      })
  }
} 