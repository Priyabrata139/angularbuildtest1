import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent {
courses=["web","and","java","c","c++","javascript"];
showCourses:boolean=true;
courseName="";
textColor='black';
colorRed={
  'color':'red',
}

colorGreen={
  'color':'green',
}



styleObj=this.colorRed;
classObj='BackgroundcolorBlue';

showCoursesHandeler(){
  this.showCourses=!this.showCourses;
  this.courseName="";
}

showCourseDurationHandeler(course:string){
this.courseName=course;
}

changecolorHandeler(){
if (this.styleObj==this.colorRed) {
  this.styleObj=this.colorGreen;
}
else{
  this.styleObj=this.colorRed;
}
}


changeBackgroundcolorHandeler(){
  if (this.classObj==='BackgroundcolorBlue') {
    this.classObj='BackgroundcolorYellow';
    
  }
  else{
    this.classObj='BackgroundcolorBlue';
    
  }
}

}
