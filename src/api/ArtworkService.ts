import { ArtworkResponse, ArtworksWithPagination } from "./types";

class ArtworkService {
  private BASE_URL = "https://api.artic.edu/api/v1/";
  private fields = [
    "id",
    "title",
    "artist_display",
    "artist_id",
    "artist_title",
    "date_display",
    "date_start",
    "date_end",
    "description",
    "dimensions",
    "image_id",
    "credit_line",
    "place_of_origin",
    "is_public_domain",
  ];

  async getAllArtworks(page: number = 1, limit: number = 5) {
    const url = new URL(this.BASE_URL + "artworks");

    const params = {
      fields: this.fields.join(","),
      page: page.toString(),
      limit: limit.toString(),
    };
    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url);
    const data = await response.json();
    const artworksWithPagination: ArtworksWithPagination = {
      data: data.data,
      pagination: data.pagination,
    };
    console.log(artworksWithPagination);

    return artworksWithPagination;
  }

  async getArtworkById(artworkId: number) {
    const url = new URL(`artworks/${artworkId}`, this.BASE_URL);
    const params = {
      fields: this.fields.join(","),
    };
    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url);
    const { data } = await response.json();

    console.log(data as ArtworkResponse);

    return data as ArtworkResponse;
  }

  async searchArtwork(query: string) {
    const url = new URL("artworks/search", this.BASE_URL);
    const params = {
      q: query,
    };
    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url);
    const { data } = await response.json();

    const artworks = [];
    for (let i = 0; i < data.length; i++) {
      const artwork = await this.getArtworkById(data[i].id);
      artworks.push(artwork);
    }
    console.log(artworks);

    return artworks;
  }

  getImageUrlById(imageId: string) {
    return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
  }
}

export const artworkService = new ArtworkService();