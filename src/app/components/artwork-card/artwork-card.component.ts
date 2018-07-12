import { Component } from '@angular/core';
import {Artwork} from "../../models/artwork.model";
import {Post} from "../../models/post.model";
import {ArtworkService} from "../../services/artwork.service";

@Component({
  selector: 'artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.css']
})
export class ArtworkCardComponent {
  artwork: Artwork;

  ngOnInit() {
    let as = new ArtworkService();

    as.getActiveArtwork()
      .subscribe(artwork => {
        console.log(artwork);
        this.artwork = artwork;
      });
  }
}
