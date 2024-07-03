import { useState } from "react"
import Card from "./Card";

export default function Home() {
const [products, setProducts] = useState([
  {
      "id": 36,
      "name": "credo",
      "description": "ryuryu",
      "price": 933918,
      "stock": 39,
      "imgUrl": "https://picsum.photos/seed/DXQs6olFa/100/100",
      "categoryId": 5,
      "authorId": 1,
      "createdAt": "2024-01-08T08:48:04.240Z",
      "updatedAt": "2024-01-16T08:34:47.860Z",
      "Category": {
          "id": 5,
          "name": "molestiae",
          "createdAt": "2024-01-08T08:48:03.891Z",
          "updatedAt": "2024-01-08T08:48:03.891Z"
      }
  },
  {
      "id": 46,
      "name": "deripio",
      "description": "Administratio cur commodo quaerat adicio coadunatio. Tergiversatio admitto casus vindico atqui aperiam corrupti. Arguo acies cauda sopor despecto sol delectus.",
      "price": 645429,
      "stock": 26,
      "imgUrl": "https://loremflickr.com/100/100?lock=1784188751577088",
      "categoryId": 9,
      "authorId": 9,
      "createdAt": "2024-01-08T08:48:04.241Z",
      "updatedAt": "2024-01-08T08:48:04.241Z",
      "Category": {
          "id": 9,
          "name": "confido",
          "createdAt": "2024-01-08T08:48:04.164Z",
          "updatedAt": "2024-01-08T08:48:04.164Z"
      }
  },
  {
      "id": 49,
      "name": "dolores",
      "description": "Antea adicio succedo bestia aro. Adfero accendo suffragium ventus abduco venia. Vulnero denuo dedico.",
      "price": 997976,
      "stock": 57,
      "imgUrl": "https://picsum.photos/seed/ltij70mU/100/100",
      "categoryId": 5,
      "authorId": 9,
      "createdAt": "2024-01-08T08:48:04.241Z",
      "updatedAt": "2024-01-08T08:48:04.241Z",
      "Category": {
          "id": 5,
          "name": "molestiae",
          "createdAt": "2024-01-08T08:48:03.891Z",
          "updatedAt": "2024-01-08T08:48:03.891Z"
      }
  },
  {
      "id": 51,
      "name": "tergum",
      "description": "Sto antepono defungo confero error provident angustus. Vae uberrime callide summisse. Deduco ultio cimentarius.",
      "price": 220085,
      "stock": 56,
      "imgUrl": "https://loremflickr.com/100/100?lock=1516564245381120",
      "categoryId": 5,
      "authorId": 4,
      "createdAt": "2024-01-08T08:48:04.241Z",
      "updatedAt": "2024-01-08T08:48:04.241Z",
      "Category": {
          "id": 5,
          "name": "molestiae",
          "createdAt": "2024-01-08T08:48:03.891Z",
          "updatedAt": "2024-01-08T08:48:03.891Z"
      }
  },
  {
      "id": 45,
      "name": "comis",
      "description": "Ventosus absum bis vulgo verecundia. Blanditiis vinco temeritas suppono supra utpote accedo tubineus. Sustineo officia atque contigo.",
      "price": 462039,
      "stock": 63,
      "imgUrl": "https://loremflickr.com/100/100?lock=6859192212127744",
      "categoryId": 6,
      "authorId": 7,
      "createdAt": "2024-01-08T08:48:04.241Z",
      "updatedAt": "2024-01-08T08:48:04.241Z",
      "Category": {
          "id": 6,
          "name": "mollitia",
          "createdAt": "2024-01-08T08:48:03.959Z",
          "updatedAt": "2024-01-08T08:48:03.959Z"
      }
  },
  {
      "id": 48,
      "name": "carmen",
      "description": "Sumo voluptatibus comptus tot autus vito vix ipsam libero. Timidus beatae acceptus voluptatem possimus condico strenuus asperiores. Charisma clamo vehemens allatus sint quo.",
      "price": 900964,
      "stock": 11,
      "imgUrl": "https://loremflickr.com/100/100?lock=4847748205510656",
      "categoryId": 6,
      "authorId": 7,
      "createdAt": "2024-01-08T08:48:04.241Z",
      "updatedAt": "2024-01-08T08:48:04.241Z",
      "Category": {
          "id": 6,
          "name": "mollitia",
          "createdAt": "2024-01-08T08:48:03.959Z",
          "updatedAt": "2024-01-08T08:48:03.959Z"
      }
  },
  {
      "id": 50,
      "name": "verbum",
      "description": "Nulla surculus stultus. Optio amo commemoro. Virtus sperno ara.",
      "price": 386634,
      "stock": 6,
      "imgUrl": "https://loremflickr.com/100/100?lock=6884995687776256",
      "categoryId": 10,
      "authorId": 4,
      "createdAt": "2024-01-08T08:48:04.241Z",
      "updatedAt": "2024-01-08T08:48:04.241Z",
      "Category": {
          "id": 10,
          "name": "studio",
          "createdAt": "2024-01-08T08:48:04.232Z",
          "updatedAt": "2024-01-08T08:48:04.232Z"
      }
  },
  {
      "id": 59,
      "name": "perferendis",
      "description": "Conscendo nobis solus turba textus ducimus damnatio incidunt. Commodo vere ratione cubo. Vulariter umerus vilicus careo crustulum adfectus subseco stips soluta.",
      "price": 875344,
      "stock": 50,
      "imgUrl": "https://loremflickr.com/100/100?lock=1596407918100480",
      "categoryId": 3,
      "authorId": 3,
      "createdAt": "2024-01-08T08:48:04.242Z",
      "updatedAt": "2024-01-08T08:48:04.242Z",
      "Category": {
          "id": 3,
          "name": "aut",
          "createdAt": "2024-01-08T08:48:03.755Z",
          "updatedAt": "2024-01-08T08:48:03.755Z"
      }
  },
  {
      "id": 57,
      "name": "viscus",
      "description": "Accedo utor vacuus admoneo terminatio valens decumbo pecto aperiam carbo. Statua xiphias iure. Arbitro bibo pecto varius solus quasi odio ipsum.",
      "price": 476260,
      "stock": 50,
      "imgUrl": "https://picsum.photos/seed/bO7BHGMd/100/100",
      "categoryId": 1,
      "authorId": 9,
      "createdAt": "2024-01-08T08:48:04.242Z",
      "updatedAt": "2024-01-08T08:48:04.242Z",
      "Category": {
          "id": 1,
          "name": "calco",
          "createdAt": "2024-01-08T08:48:03.618Z",
          "updatedAt": "2024-01-08T08:48:03.618Z"
      }
  },
  {
      "id": 52,
      "name": "cito",
      "description": "Vester bos vapulus vestrum tripudio. Adstringo vulgus demum tero omnis curatio pariatur. Vulgus asper sortitus aranea adficio autus exercitationem deserunt bestia.",
      "price": 75652,
      "stock": 83,
      "imgUrl": "https://loremflickr.com/100/100?lock=7870711081205760",
      "categoryId": 7,
      "authorId": 1,
      "createdAt": "2024-01-08T08:48:04.242Z",
      "updatedAt": "2024-01-14T09:55:56.175Z",
      "Category": {
          "id": 7,
          "name": "ager",
          "createdAt": "2024-01-08T08:48:04.027Z",
          "updatedAt": "2024-01-08T08:48:04.027Z"
      }
  },
  {
      "id": 55,
      "name": "delinquo",
      "description": "Aggero adsum deporto. Decens adficio tristis coaegresco arcesso consequatur. Vigor numquam clarus arca.",
      "price": 252942,
      "stock": 100,
      "imgUrl": "https://loremflickr.com/100/100?lock=8596275247185920",
      "categoryId": 10,
      "authorId": 4,
      "createdAt": "2024-01-08T08:48:04.242Z",
      "updatedAt": "2024-01-08T08:48:04.242Z",
      "Category": {
          "id": 10,
          "name": "studio",
          "createdAt": "2024-01-08T08:48:04.232Z",
          "updatedAt": "2024-01-08T08:48:04.232Z"
      }
  },
  {
      "id": 54,
      "name": "certe",
      "description": "Viridis nemo delectus caste. Quaerat assentator astrum incidunt cur trepide utilis adaugeo vulgivagus. Numquam astrum decor vesica.",
      "price": 541721,
      "stock": 40,
      "imgUrl": "https://picsum.photos/seed/Bxt6l/100/100",
      "categoryId": 6,
      "authorId": 10,
      "createdAt": "2024-01-08T08:48:04.242Z",
      "updatedAt": "2024-01-08T08:48:04.242Z",
      "Category": {
          "id": 6,
          "name": "mollitia",
          "createdAt": "2024-01-08T08:48:03.959Z",
          "updatedAt": "2024-01-08T08:48:03.959Z"
      }
  }
]);

  return (
  <>
    <div className="home-query justify-item-center  flex flex-1 h-16 gap-5 justify-center ">

      <div className="btn btn-neutral ">Filter By</div>
      <div className="btn btn-neutral">Short By</div>
    </div>
    <div className="home-content flex flex-1 flex-wrap justify-center">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
    
  </>
 )
}