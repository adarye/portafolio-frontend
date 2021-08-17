import { filter, map } from 'rxjs/operators';
import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],

})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() fieldShow: any = [];
  @Input() paginate: any = {};
  @Output() get: any = new EventEmitter();
  list: any = [];
  fields: any = [];

  //PAGINATE

  from: number = 0;
  last_page: number = 0;
  per_page: number = 0;
  to: number = 0;
  total: number = 0;
  current_page: number = 0;
  numbers:any = [];
  pageTemp:number = 0

  constructor(private router:Router, private route: ActivatedRoute) {

  }
  getValue(item, i: number) {
    let field = this.fields[i];
    return item[field];

  }

  ngOnInit(): void {


  }
  ngOnChanges(): void {

    if (Object.keys(this.paginate).length > 0) {
      this.list = this.paginate.data
      this.from = this.paginate.from;
      this.last_page = this.paginate.last_page;
      this.per_page = this.paginate.per_page;
      this.to = this.paginate.to;
      this.total = this.paginate.total;
      this.current_page = this.paginate.current_page;
      if (this.list.length > 0) {
        this.fields = Object.keys(this.list[0]);
      }
      this.getNumbers();
    }
  }

  nextPage() {
    let page = this.current_page + 1;
    this.get.emit(page);
  }
 backPage() {
    let page = this.current_page - 1;
    this.get.emit(page);
  }
  getNumbers(){
    this.numbers = [];
    let startPage;
    (this.current_page > 2) ? startPage = this.current_page - 2 : startPage = 1;
    let endPage
    (this.last_page >= (this.current_page  + 3)) ?  endPage = this.current_page + 3 : endPage = this.last_page;
    for (let i = startPage; i <= endPage; i++) {
      this.numbers.push(i);
    }

    this.numbers;

  }
  aleatoryPage(page:number){
    this.get.emit(page);
  }

}
