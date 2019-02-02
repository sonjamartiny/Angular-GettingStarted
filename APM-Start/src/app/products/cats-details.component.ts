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
  errorMessage = '';
  cat: ICat | undefined;
  imageWidth: number = 280;
  imageHeight: number = 190;
  imageMargin: number = 2;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private catService: CatService ) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.catService.getProduct(id).subscribe(
      cat => this.cat = cat,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/cats']);
  }
  
}
