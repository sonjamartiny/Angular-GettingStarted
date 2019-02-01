import { Component, OnInit } from '@angular/core';
import { ICat } from './cat';
import { CatService } from './cats.service';

@Component({
  selector: 'pm-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit{
  
    
  pageTitle = 'Katzen in Not';
  buttontext: string = 'Mehr';
 
  imageWidth: number = 280;
  imageHeight: number = 190;
  imageMargin: number = 2;
  //listFilter = 'search for name';
  //catonetext(): string { return 'Das ist eine süße Katze.'; };
  //cattwotext(): string { return 'Tiggy ist eine verspielte Katze.' }
  showMore(): void { alert() }

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCats = this.listFilter ? this.performFilter(this.listFilter) : this.cats;
  }

  filteredCats: ICat[];

  cats: ICat[] ;

  // fürs filtern notwendig
  constructor(private catService : CatService) {
   // this.listFilter = '';
  }

  ngOnInit(): void {
    //console.log("ng OnInit implementiert");
    this.cats = this.catService.getCats();
    this.filteredCats = this.cats;
  }

  // method fürs filtern der katzen
  performFilter(filterBy: string): ICat[] {
    filterBy = filterBy.toLowerCase();
    return this.cats.filter((cat: ICat) => cat.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onNotify(message: string): void {
    console.log('The rating was clicked')
  }
}
