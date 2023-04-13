export interface Cat {
  id: string;
  title: string;
  content: string;
  status: CatStatus;
}

export enum CatStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
