import {Author} from "./author.model";
import {Post} from "./post.model";
import {Tag} from "./tag.model";

export class Artwork {
  name?: string = 'TEST';
  createdDate?: Date;
  updatedDate?: Date;
  tags?: Tag[];
  posts?: Post[];
  author?: Author[];
  location?: ArtworkLocation;
  relatedArtworks?: Artwork[];
  description?: string;

  constructor(that: Artwork){
    console.log(that);
    this.name = that.name;
  }
}

export class ArtworkLocation{
  latitude: number;
  longitude: number;

  constructor(that: ArtworkLocation){
    this.latitude = that.latitude;
    this.longitude = that.longitude;
  }
}
