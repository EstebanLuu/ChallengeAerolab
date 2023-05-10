export interface Redemption {
  productId: string;
  pointsSpent: number;
  date: number;
}

export type User = {
  id: string;
  name: string;
  points: number;
  redeemHistory: Array<Redemption>;
  createDate: string;
};
