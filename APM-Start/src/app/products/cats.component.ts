import { Component } from '@angular/core';

@Component({
  selector: 'pm-cats',
  templateUrl: './cats.component.html'
})
export class CatsComponent {
  pageTitle = 'Katzen in Not';
  buttontext: string = 'Mehr';
  cartoneheading: string = 'Katze Luna';
  carttwoheading: string = 'Katze Tiggy';
  imageWidth: number = 280;
  imageHeight: number = 190;
  imageMargin: number = 2;
  //catonetext(): string { return 'Das ist eine süße Katze.'; };
  //cattwotext(): string { return 'Tiggy ist eine verspielte Katze.' }
  showMore(): void { alert() }

  cats: any[] = [
    {
      productImage: 'assets/images/catone.jpg',
      productId: 2,
      productName: "Lucia",
      productAge: 4,
      productDescription: 'Das ist eine süße Katze'
    },
    {
      productImage: 'assets/images/cattwo.jpg',
      productId: 1,
      productName: "Nemo",
      productAge: 6,
      productDescription: 'Das ist Katze Nemo.'
    },
    {
      productImage: 'assets/images/catfive.jpg',
      productId: 3,
      productName: "Ted",
      productAge: 9,
      productDescription: 'Ted braucht ein neues Heim.'
    },
    {
      productImage: 'assets/images/catfour.jpg',
      productId: 4,
      productName: "Pepe",
      productAge: 2,
      productDescription: 'Willst du Pepe aufnehmen?'
    },
    {
      productImage: 'assets/images/catthree.jpg',
      productId: 5,
      productName: "Skubby",
      productAge: 10,
      productDescription: 'Süß, verspielt und verschmust.'
    }
  ];
}
