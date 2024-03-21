import img1 from "../../images/headPhonesImages/headPhones_1.svg";
import img2 from "../../images/headPhonesImages/headPhones_2.svg";
import img3 from "../../images/headPhonesImages/headPhones_3.svg";
import img4 from "../../images/wirelessHeadPhones/headPhones_1.svg";
import img5 from "../../images/wirelessHeadPhones/headPhones_2.svg";
import img6 from "../../images/wirelessHeadPhones/headPhones_3.svg";
export type Tdata = {
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  rating: number;
  id: number;
  count: number;
};
export type TDataArray = {
  headPhones: Tdata[];
  wirellesHeadPhones: Tdata[];
};
export const dataCards: TDataArray = {
  headPhones: [
    {
      name: "Apple BYZ S852I",
      salePrice: 3557,
      price: 2997,
      image: img1,
      rating: 4.7,
      id: 1,
      count: 1,
    },
    {
      name: "Apple EarPods",
      price: 2327,
      image: img2,
      rating: 4.5,
      id: 2,
      count: 1,
    },
    {
      name: "Apple EarPods",
      price: 2327,
      image: img3,
      rating: 4.5,
      id: 3,
      count: 1,
    },
    {
      name: "Apple BYZ S852I",
      price: 2927,
      image: img1,
      rating: 4.7,
      id: 4,
      count: 1,
    },
    {
      name: "Apple EarPods",
      price: 2327,
      image: img2,
      rating: 4.5,
      id: 5,
      count: 1,
    },
    {
      name: "Apple EarPods",
      price: 2327,
      image: img3,
      rating: 4.5,
      id: 6,
      count: 1,
    },
  ],
  wirellesHeadPhones: [
    {
      name: "Apple AirPods",
      price: 9527,
      image: img4,
      rating: 4.7,
      id: 7,
      count: 1,
    },
    {
      name: "GERLAX GH-04",
      price: 6527,
      image: img5,
      rating: 4.7,
      id: 8,
      count: 1,
    },
    {
      name: "GERLAX GH-04",
      price: 7527,
      image: img6,
      rating: 4.7,
      id: 9,
      count: 1,
    },
  ],
};
