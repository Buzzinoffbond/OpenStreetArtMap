import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Artwork} from "../models/artwork.model";

@Injectable()
export class AppService {

  allArtworks: Artwork[];
  activeArtwork: Artwork;
  artworksForLocation: Artwork[];

}
