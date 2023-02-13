import figma_img from "../figma_img/kadai_paneer.jpg";
import palak from "../figma_img/palak_paneer.jpg";
import chili from "../figma_img/chili_paneer.jpg";
import matar from "../figma_img/matar.jpg";
import fry_rice from "../figma_img/pulaw.jpg";
import pulaw from "../figma_img/pulaw1.jpg";
import planrice from "../figma_img/plane-rice.jpg";
import tawa_roti from "../figma_img/tawa_roti.jpg";
import tandori_roti from "../figma_img/Tandoori-Roti.jpg";
import lachha_roti from "../figma_img/lachha_paratha.jpg";
import kulcha from "../figma_img/kulcha.jpg";
import plan_dal from "../figma_img/plan_dal.jpg";
import daltadka from "../figma_img/dal-tadka.jpg";
import dal_makhni from "../figma_img/dal_makhni.jpg";
import dal_palak from "../figma_img/dal_palak.jpg";
import seai_kheer from "../figma_img/sewai.jpg";
import kesar_kheer from "../figma_img/kesar.jpg";
import sabudana_kheer from "../figma_img/sabudana_kheer.jpg";
import standard from "../figma_img/standard_thali.jpg";
import simple_thali from "../figma_img/simple_thali.jpg";
import signup from "../figma_img/signup-img.jpg";
import burfi from "../figma_img/rava-burfi.jpg";
import gulabjamun from "../figma_img/gulabjamun.jpg";
import peda from "../figma_img/peda.jpg";
import chaw_mein from "../figma_img/chow-mein.jpg";
import manchurian from "../figma_img/manchurian.jpg";
import momo from "../figma_img/momos.jpg";

import {FOOD_CATEGORIES, FOOD_QUANTITY} from "./common";

const {PANEER, DAL, ROTI, KHEER, RICE, THALI, SWEET, CHAINESE} =
  FOOD_CATEGORIES;
export const foodList = [
  {
    id: 1,
    name: "Kadai Paneer",
    qty: FOOD_QUANTITY,
    category: PANEER,
    image: figma_img,
    price: "150",
  },
  {
    id: 2,
    name: "Palak Paneer",
    qty: FOOD_QUANTITY,
    category: PANEER,
    image: palak,
    price: "120",
  },
  {
    id: 3,
    name: "Chili Paneer",
    qty: FOOD_QUANTITY,
    size: "",
    category: PANEER,
    image: chili,
    price: "150",
  },
  {
    id: 4,
    name: "Chili Paneer",
    qty: FOOD_QUANTITY,
    size: "",
    category: PANEER,
    image: matar,
    price: "160",
  },
  {
    id: 5,
    name: "Fry rice",
    qty: FOOD_QUANTITY,
    size: "",
    category: RICE,
    image: fry_rice,
    price: "120",
  },
  {
    id: 6,
    name: "Pulaw",
    qty: FOOD_QUANTITY,
    size: "",
    category: RICE,
    image: pulaw,
    price: "150",
  },
  {
    id: 7,
    name: "Plan Rice",
    qty: FOOD_QUANTITY,
    size: "",
    category: RICE,
    image: planrice,
    price: "100",
  },
  {
    id: 8,
    name: "Plan Roti",
    qty: "1",
    size: "",
    category: ROTI,
    image: tawa_roti,
    price: "10",
  },
  {
    id: 9,
    name: "Tandoor Roti",
    qty: "1",
    size: "",
    category: ROTI,
    image: tandori_roti,
    price: "15",
  },
  {
    id: 10,
    name: "Lachha Roti",
    qty: "1",
    size: "",
    category: ROTI,
    image: lachha_roti,
    price: "20",
  },
  {
    id: 11,
    name: "Kulcha",
    qty: "1",
    size: "",
    category: ROTI,
    image: kulcha,
    price: "20",
  },
  {
    id: 12,
    name: "Plan Dal",
    qty: FOOD_QUANTITY,
    size: "",
    category: DAL,
    image: plan_dal,
    price: "100",
  },
  {
    id: 13,
    name: "Dal-Tadka",
    qty: FOOD_QUANTITY,
    size: "",
    category: DAL,
    image: daltadka,
    price: "120",
  },
  {
    id: 14,
    name: "Dal-Makhni",
    qty: FOOD_QUANTITY,
    size: "",
    category: DAL,
    image: dal_makhni,
    price: "160",
  },
  {
    id: 15,
    name: "Dal-Palak",
    qty: FOOD_QUANTITY,
    size: "",
    category: DAL,
    image: dal_palak,
    price: "120",
  },
  {
    id: 16,
    name: "Sewai Kheer",
    qty: FOOD_QUANTITY,
    size: "",
    category: KHEER,
    image: seai_kheer,
    price: "160",
  },
  {
    id: 17,
    name: "Kesar Kheer",
    qty: FOOD_QUANTITY,
    size: "",
    category: KHEER,
    image: kesar_kheer,
    price: "200",
  },
  {
    id: 18,
    name: "Sabudana Kheer",
    qty: FOOD_QUANTITY,
    size: "",
    category: KHEER,
    image: sabudana_kheer,
    price: "200",
  },
  {
    id: 19,
    name: "Special Thali",
    qty: FOOD_QUANTITY,
    size: "",
    category: THALI,
    image: signup,
    price: "200",
  },
  {
    id: 20,
    name: "Standard Thali",
    qty: FOOD_QUANTITY,
    size: "",
    category: THALI,
    image: standard,
    price: "250",
  },
  {
    id: 21,
    name: "Simple Thali",
    qty: FOOD_QUANTITY,
    size: "",
    category: THALI,
    image: simple_thali,
    price: "100",
  },
  {
    id: 22,
    name: "Rava Burfi",
    qty: FOOD_QUANTITY,
    size: "",
    category: SWEET,
    image: burfi,
    price: "300",
  },
  {
    id: 23,
    name: "Gulab-jamun",
    qty: FOOD_QUANTITY,
    size: "",
    category: SWEET,
    image: gulabjamun,
    price: "100",
  },
  {
    id: 24,
    name: "Crazy-deserd",
    qty: FOOD_QUANTITY,
    size: "",
    category: SWEET,
    image: peda,
    price: "200",
  },
  {
    id: 25,
    name: "Manchurian",
    qty: FOOD_QUANTITY,
    size: "",
    category: CHAINESE,
    image: manchurian,
    price: "200",
  },
  {
    id: 26,
    name: "Manchurian",
    qty: FOOD_QUANTITY,
    size: "",
    category: CHAINESE,
    image: chaw_mein,
    price: "200",
  },
  {
    id: 27,
    name: "Momos",
    qty: FOOD_QUANTITY,
    size: "",
    category: CHAINESE,
    image: momo,
    price: "200",
  },
];

const [food1, , food2] = foodList;
const fff = [foodList[59], foodList[60]];
