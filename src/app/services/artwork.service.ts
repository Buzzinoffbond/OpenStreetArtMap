import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Artwork, ArtworkLocation} from "../models/artwork.model";
import {Post} from "../models/post.model";

@Injectable()
export class ArtworkService {

  public getActiveArtwork(): Observable<Artwork> {

    return Observable.create(observer => {
      observer.next(getArtwork());
      observer.complete();
    });

  }

  public getArtworksForLocation(): Observable<Artwork> {

    return Observable.create(observer => {
      observer.next([getArtwork()]);
      observer.complete();
    });

  }

}

function getArtwork(){
  let artwork = new Artwork({
    name: 'The Key'
  });
  artwork.posts = [
    new Post({
      photo_url: 'https://scontent-arn2-1.cdninstagram.com/vp/433e65473bf034a7e60be8c8ae13c23d/5BE2CE91/t51.2885-15/sh0.08/e35/s640x640/12502001_1684679971804730_1029010714_n.jpg',
      post_url: 'https://www.instagram.com/p/BBcqvbuxhDR'
    })
  ];
  artwork.location = new ArtworkLocation({
    latitude: 55.770746,
    longitude: 37.648018
  });

  return artwork;
}
