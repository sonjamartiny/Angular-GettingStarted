import { Component, OnInit } from '@angular/core';
import { ICat } from './cat';
import { CatService } from './cats.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-cats-details',
  templateUrl: './cats-details.component.html',
  styleUrls: ['./cats-details.component.css']
})
export class CatsDetailsComponent implements OnInit {
  pageTitle: string = "Katze ";
  cat: ICat;

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id'); //parametername = route configured
    //das plus wandelt den string in eine numerische id um
    this.pageTitle += `: ${id}`;
    this.cat =
      {
        "productImage": "assets/images/catone.jpg",
        "productId": 2,
        "productName": "Lene",
        "productAge": 4,
        "productDescription": "Das ist eine süße Katze",
        "productPrice": 120,
        "productStars": 2
      }
  }

  onBack(): void {
    this.router.navigate(['/cats']);
  }
  
}
