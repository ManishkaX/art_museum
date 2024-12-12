export interface ArtworkResponse {
  id: number;
  title: string;
  artist_id: number;
  artist_display: string;
  artist_title: string;
  date_display: string;
  date_start: number;
  date_end: number;
  description: string;
  dimensions: string;
  image_id: string;
  credit_line: string;
  place_of_origin: string;
  is_public_domain: boolean;
};

export interface Pagination {
    current_page: number;
    limit: number;
    next_url: string;
    offset: number;
    total: number;
    total_pages: number;
}

export interface ArtworksWithPagination {
    data: Array<ArtworkResponse>;
    pagination: Pagination;
}
