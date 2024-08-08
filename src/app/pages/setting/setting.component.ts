import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent  {
  // @HostBinding('class.myClass') className:any
  // @HostListener('click') myclick(){
  //   this.className = true
  // }
  
  // myform!: FormGroup;

  // ngOnInit() {
  //   this.myform = new FormGroup({
  //     email: new FormControl(null, [this.noSpaceAllowed]),
  //     password: new FormControl(null, [this.noSpaceAllowed]),
  //     skills: new FormArray([
  //       new FormControl(''),
  //       new FormControl('')
  //     ])
  //   });
  //   this.observable.subscribe((val)=>{
  //     console.log(val)
  //   })
  //   // this.myform.get('email')?.valueChanges.subscribe((data)=>{
  //   //   console.log(data)
  //   // })
  //   // setTimeout(() => {
  //   //   this.myform.setValue({
  //   //     email:"viveksengar@gmail.com",
  //   //     password:'mkkmkkscn',
  //   //     skills:['vivek','smal']
  //   //   })
  //   // },4000);
   
  // }

  // get skills() {
  //   return this.myform.get('skills') as FormArray;
  // }

  onSubmit(form:NgForm) {
    console.log(form);
  }

  // addButton() {
  //   this.skills.push(new FormControl(''));
  // }

  // noSpaceAllowed(control:AbstractControl) {
  //   if (control.value && control.value.indexOf(' ') !== -1) {
      
  //     return { noSpaceAllowed: true };

  //   }
  //   return null;
  // }
  // observable=new Observable((observer)=>{
  //   setTimeout(() => {
  //     observer.next("v3")
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next("v2")    }, 2000);
  //   setTimeout(() => {
  //     observer.next("v1")    }, 1000);
  // })  

}