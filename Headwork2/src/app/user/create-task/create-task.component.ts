import { Component, OnInit } from '@angular/core';
import{Task2} from './task2';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  public task : Task2;
  public paterns = [
      {value : 0, valueView: 'Base Patern'},
      {value : 1, valueView: 'Image Patern'},
      {value : 2, valueView: 'PDF Patern'}
    ];
  public answers = [
        {value : 0, valueView: 'Single text'},
        {value : 1, valueView: 'Single integer'},
        {value : 2, valueView: 'List'}
      ];
  public competences = [
          {value: 'Prog'},
          {value: 'Photo'},
          {value: 'Insecte'}
        ];
  public answer = "";
  public url = '';
  public pdfSrc;
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

  onPdfSelected() {
    let $img: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer($img.files[0]);
    }
  }

  onAdd() {
   this.task.reponses.push(this.answer);
   this.answer = "";
 }

 onDelete(msg : string){
   this.task.reponses.splice(this.task.reponses.indexOf(msg),1);
 }

  constructor() {
    this.task = {id:0,description:"",title:"",competences:[],image:"",pdf:"", question:"", typeDeQuestion : 0,typeDeReponses : 0, reponses:[]};
  }

  ngOnInit() {
  }

}
