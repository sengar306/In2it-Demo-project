import {   Component, ElementRef, ViewChild,} from '@angular/core';
import {  AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


// import { ColDef, GridOptions , GridApi} from 'ag-grid-community';

// import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-solutionarea',

  templateUrl: './solutionarea.component.html',
  styleUrls: ['./solutionarea.component.css'],
})
export class SolutionareaComponent  {
  message:any
  @ViewChild('para') child!:ElementRef
  uxtrends=['vivek','shiva']
   myform!:FormGroup
 ngOnInit(): void {
   this.myform=new FormGroup({
    email:new FormControl(null,this.asynvalidator),
    username:new FormControl(null,[Validators.required,this.naNames.bind(this)]),
    password:new FormControl(null,[Validators.required]),
    skills:new FormArray([])
   })
   
 }
 submit(){
    console.log(this.myform.controls?.['username']?.['errors']?.['nameisnotallowed'])
    console.log(this.myform)
// console.log(this.myform.get('username')?.errors['nameisnotallowed'])
    
 }


//   onAddskill()
//  {
//   const control= new FormControl(null, Validators.required);
//  (<FormArray>this.myform.get('skills')).push(control)
//  }

  



naNames(formcontrol:FormControl):{[s:string]:boolean}
{
  if(this.uxtrends.indexOf(formcontrol.value)!== -1)

  {
     return{'nameisnotallowed':true}
  }
  return {}

}
  
asynvalidator(control:AbstractControl):Promise<any>{
  let promise=new Promise((resolve)=>{
    if(control.value=='test@gmail.com')
    {
      resolve({resolve:true})
    }
    else{
      resolve (null)
    }
    
  })
  return promise
}

}


// export function emailAsyncValidator(): AsyncValidatorFn {
//   return (control: AbstractControl): Observable<{ [key: string]: boolean } | null> => {
//     return new Observable(observer => {
//       setTimeout(() => {
//         if (control.value === 'test@gmail.com') {
//           observer.next({ 'emailTaken': true });
//         } else {
//           observer.next(null);
//         }
//         observer.complete();
//       }, 2000); // Simulated async delay
//     })
    
  
//   };