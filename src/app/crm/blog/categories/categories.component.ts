import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  forma: FormGroup
  constructor(private readonly fb: FormBuilder) {
    this.forma = this.fb.group({
      name: ['',[Validators.required]],
      description: ['',[Validators.required]],
      color: ['',[Validators.required]]
    });
    this.forma.setValue({
      color: 'abc',
      name: 'def',
      description: ''
   });
  }

  ngOnInit(): void {
  }
  create(){
    console.log(this.forma.value)
    console.log(this.forma);
  }
  get name() { return this.forma.get('name'); }

}
