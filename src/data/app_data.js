import img1 from "../images/slider1.jpg";
import img2 from "../images/slider2.jpeg";
import img3 from "../images/slider3.jpg";

export const imagesForSlider = [img1, img2, img3];

export const teamGallery = [
  {
    name: "Steve Jobs",
    src:
      "https://naqyr37xcg93tizq734pqsx1-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/10-Things-We-Can-Learn-From-the-Incredible-Steve-Jobs.jpg",
    email: "steveJobs@gmail.com"
  },
  {
    name: "Mark Elliot Zuckerberg",
    src:
      "https://img2.freepng.ru/20180324/lte/kisspng-mark-zuckerberg-facebook-founder-harvard-universit-mark-zuckerberg-5ab685dac193b0.9104902415219112587929.jpg",
    email: "zuckerberg@gmail.com"
  },
  {
    name: "Steve Jobs",
    src:
      "https://naqyr37xcg93tizq734pqsx1-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/10-Things-We-Can-Learn-From-the-Incredible-Steve-Jobs.jpg",
    email: "steveJobs@gmail.com"
  },
  {
    name: "Brendan Eich",
    src:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/600px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg",
    email: "Brend-eich@gmail.com"
  }
];
export const status_options = [
  { id: 1, name: "новый" },
  { id: 2, name: "в ожидании" },
  { id: 3, name: "выполнен" },
  { id: 4, name: "в работе" }
];
export const priority_options = [
  { id: 1, name: "низкий" },
  { id: 2, name: "средний" },
  { id: 3, name: "высокий" },
  { id: 4, name: "срочный" }
];
export const TAKE_TICKETS = 10;
export const options_data_format = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};
export const map_options = {
  center: { lat: 7.7186518, lng: 81.7189023 },
  zoom: 8,
  backgroundColor: "#3f6789"
};

export const API_KEY_GOOGLE_MAP = "AIzaSyD0r74TOiNpVeA4EgREonzyNuAr6l0mW5E";

export const leftUserMenu = [
  {
    name: "Панели задач",
    path: "/dashboard",
    dropdown: [
      {
        name: "Новые",
        path: "/tasks-new"
      },
      {
        name: "В ожидании",
        path: "/tasks-panding"
      },
      {
        name: "Выполненные",
        path: "/tasks-done"
      },
      {
        name: "В работе",
        path: "/tasks-inworking"
      }
    ]
  },
  {
    name: "Lorem ispum",
    path: "/dashboard",
    dropdown: [
      {
        name: "Lorem ispum",
        path: "/tasks-new"
      },
      {
        name: "Lorem ispum",
        path: "/tasks-panding"
      },
      {
        name: "Lorem ispum",
        path: "/tasks-done"
      },
      {
        name: "Lorem ispum",
        path: "/tasks-inworking"
      }
    ]
  },
  {
    name: "Lorem ispum",
    path: "/dashboard",
    dropdown: null
  },
  {
    name: "Lorem ispum",
    path: "/dashboard",
    dropdown: null
  },
  {
    name: "Lorem ispum",
    path: "/dashboard",
    dropdown: null
  },
  {
    name: "Lorem ispum",
    path: "/dashboard",
    dropdown: null
  },
  {
    name: "Lorem ispum",
    path: "/dashboard",
    dropdown: null
  },
  {
    name: "Lorem ispum",
    path: "/dashboard",
    dropdown: null
  }
];
