import { Injectable } from "@angular/core";
import { ICat } from "./cat";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'  //service is accessable from any component in application
})
export class CatService {

  private productUrl = "api/products/products.json"; //this should be webservice address

  constructor(private http: HttpClient) {

  }

  getCats(): ICat[] {
    return [
    {
      "productImage": 'assets/images/catone.jpg',
      "productId": 2,
      "productName": "Lene",
      "productAge": 4,
      "productDescription": 'Das ist eine süße Katze',
      "productPrice": 120,
      "productStars": 2
    }, 
    {
      "productImage": 'assets/images/cattwo.jpg',
      "productId": 1,
      "productName": "Nemo",
      "productAge": 6,
      "productDescription": 'Das ist Katze Nemo.',
      "productPrice": 120,
      "productStars": 3
    },
    {
      "productImage": 'assets/images/catfive.jpg',
      "productId": 3,
      "productName": "Ted",
      "productAge": 9,
      "productDescription": 'Ted braucht ein neues Heim.',
      "productPrice": 120,
      "productStars": 3
    },
    {
      "productImage": 'assets/images/catfour.jpg',
      "productId": 4,
      "productName": "Pepe",
      "productAge": 2,
      "productDescription": 'Willst du Pepe aufnehmen?',
      "productPrice": 120,
      "productStars": 3
    },
    {
      "productImage": 'assets/images/catthree.jpg',
      "productId": 5,
      "productName": "Skubby",
      "productAge": 10,
      "productDescription": 'Süß, verspielt und verschmust.',
      "productPrice": 120,
      "productStars": 4
    },
    {
      "productImage": 'assets/images/catone.jpg',
      "productId": 5,
      "productName": "Mimi",
      "productAge": 10,
      "productDescription": 'Sie ist etwas bissig.',
      "productPrice": 120,
      "productStars": 3
    }
  ];
  }
}
