export class Post {
  photo_url: string;
  post_url: string;

  constructor(that?: Post) {
    this.photo_url = that.photo_url;
    this.post_url = that.post_url
  }
}
