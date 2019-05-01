import { Component, OnInit } from '@angular/core';
import{Task2} from './task2';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  public task : Task2;

  public taskUrl = "assets/tasks.json"
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
  public url:any;
  public imgURL:any;
  public pdfSrc;
  public difficulties = [
    {value:0, valueView: 'Facile'},
    {value:1, valueView: 'Moyenne'},
    {value:2, valueView: 'Difficile'}
  ];

  public durations = [
    {value:0, valueView: '5 minutes'},
    {value:1, valueView: '10 minutes'},
    {value:2, valueView: '15 minutes'}
  ];

  getImage(imageUrl: string): Observable<Blob> {
    return this.httpClient.get(imageUrl, { responseType: 'blob' });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.url = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
   }
 
   getImageFromService() {
       this.getImage(this.imgURL).subscribe(data => {
         this.createImageFromBlob(data);
         this.task.image = this.imgURL;
       }, error => {
         console.log(error);
       });
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

 onCreate(){
   console.log(this.task);
 }

  constructor(private httpClient: HttpClient) {
    this.task= {id:0, description:"", title:"", competences: [], image: "", pdf: "", question: "", typeDeQuestion: 0, typeDeReponses : 0, reponses: [], taskDifficulty:0, taskDuration:0};
  }

  ngOnInit() {
  }

}
