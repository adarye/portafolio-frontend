import { Component, Input, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BlogCategory } from 'src/app/models/blog-category';
import { BlogService } from 'src/app/services/crm/blog.service';
import { SnackbarService } from 'src/app/services/crm/snackbar.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  image64: string = ''
  categories: BlogCategory[] = [];
  constructor(private readonly fb: FormBuilder, private blogService: BlogService, private snackbarService: SnackbarService,
    public dialog: MatDialog,  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      image: ['', [Validators.pattern('^.*\.jpeg$')]],
      id_category: ['', [Validators.required]],
      state: [1, [Validators.required]],
      content: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(1000)]]
    });
    this.loadForm();
    this.getCategories();
  }

  ngOnInit(): void {
  }

  create() {
    if (this.form.valid) {

      let message = ''
      if(this.data.obj.length > 0){
           this.blogService.updatePost(this.data.obj[0].id, this.form.value).subscribe(res=>{
             message = 'Post updated successfully!'
             this.sendMessage(message)
           })
      }
      else{
        this.blogService.createPost(this.form.value).subscribe((res) => {
          message = 'Post created successfully!';
         this.sendMessage(message)

        })
      }

    }
    else {
      var BreakException = {};
      Object.keys(this.form.controls).forEach(key => {
        const controlErrors: ValidationErrors = this.form.get(key).errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log(keyError);
            let msg = 'Field: ' + key + ', Error: ' + keyError;
             this.snackbarService.openSnackBar('center', 'bottom', 5, msg);
             throw BreakException;
          });
        }
      });
    }
  }
  sendMessage(message) {
    this.snackbarService.openSnackBar('end', 'top', 5, message);
    this.form.reset();
    this.dialog.closeAll();
  }
  loadForm(){
    if(this.data.obj.length > 0){
      if(this.data.obj.length > 1){

      }
      else{
        this.form.patchValue(this.data.obj[0]);
      }

    }
  }
  getCategories() {
    this.blogService.getCategories(1).subscribe((res: any) => {
      this.categories = res.data;
    })
  }
  getBase64(event) {
    console.log(event.target.files[0])
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    let base64;
    reader.onload = (e: any) => {
      this.image64 = e.target.result;
      this.form.value.image = this.image64;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

}
