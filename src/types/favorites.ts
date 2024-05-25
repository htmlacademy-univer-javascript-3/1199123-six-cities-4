export enum FavouritesStatus {
  Add = 1,
  Delete = 0
}

export type FavouritesData = {
  id: string | undefined;
  status: FavouritesStatus;
};
