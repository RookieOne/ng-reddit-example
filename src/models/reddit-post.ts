export default class RedditPost {
  public thumbnail: string;
  public title: string;
  public url: string;
  public description: string;
  public author: string;
  public upVotes: number;
  public numberOfComments: number;
  public hasImage: boolean;

  constructor(data) {
    this.title = data.title;
	  this.url = data.url;
    this.description = data.selftext;
	  this.thumbnail = data.thumbnail;
    this.author = data.author;
    this.upVotes = data.ups;
    this.numberOfComments = data.num_comments;
    this.hasImage = this.thumbnail != "self";
  }
}