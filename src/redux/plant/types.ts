export type SearchPlantParams = {
  currentPage: number;
  categoryType: string;
  sortBy: string;
  sortRevers: string;
}

export type Plant = {
  id: number,
  title: string,
  tags: string[],
  viewsCount: number,
  imageUrl: string,
  category: string,
  shortDescription: string,
  description: string,
  price: number,
  size: string[],
  imagesUrl: string[],
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export interface PlantSliceState {
  items: Plant[];
  status: Status
}