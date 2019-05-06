import { Component, OnInit } from '@angular/core';
import{Task} from '../../task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  public task : Task;

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
               {value: 1, valueView : 'Programmation'},
               {value: 12, valueView : 'Picture'},
               {value: 34, valueView : 'Insects'}
             ];
       public subCompetences = [
             {value: 64, valueView : 'Java'},
             {value: 65, valueView : 'Haskell'},
             {value: 66, valueView : 'Cobolt'}
       ];
       public subsubCompetences = [
             {value: 4, valueView : 'Ant'},
             {value: 5, valueView : 'Bee'},
             {value: 6, valueView : 'Beetle'}
       ];
       public subsubsubCompetences = [
             {value: 7, valueView : 'Black'},
             {value: 8, valueView : 'Red'},
       ];
       public table = [
         {id: 0, value: this.competences},
         {id: 1, value: this.subCompetences},
         {id: 34, value: this.subsubCompetences},
         {id: 4, value:  this.subsubsubCompetences}
       ];
  public currentCompetences = this.competences;
  public selectedCompetences = [];

  public answer = "";
  public url:any;
  public imgURL:any;
  public pdfSrc;
  public difficulties = [
    {value:0, valueView: 'Easy'},
    {value:1, valueView: 'Medium'},
    {value:2, valueView: 'Hard'}
  ];

  public durations = [
    {value:0, valueView: '5 minutes'},
    {value:1, valueView: '10 minutes'},
    {value:2, valueView: '15 minutes'}
  ];

  onClickExpandButton(id) {
      for (let i = 0 ; i < this.table.length; i++) {
        if (this.table[i].id === id) {
          this.currentCompetences = this.table[i].value;
        }
      }
    }

    existSubCompetences(id){
	    for (let i = 0; this.table.length > i; i += 1) {
		       if (this.table[i].id === id) {
			             return true;
		       }
	    }
	    return false;
    }

    backCompetences(){
      var id = 0;
      for (let i = 0 ; i < this.table.length; i++) {
        if (this.table[i].value == this.currentCompetences) {
          id = this.table[i].id;
          break;
        }
      }
      for (let i = 0; this.table.length > i; i += 1) {
        for (let j = 0; j<this.table[i].value.length; j++) {
             if(this.table[i].value[j].value === id){
               this.currentCompetences = this.table[i].value;
               break;
             }
		    }
	    }
    }

    delete(competence){
      this.selectedCompetences.splice(this.selectedCompetences.indexOf(competence), 1);
    }

    onAddCompetences(name) {
      if(this.selectedCompetences.indexOf(name) == -1)
        this.selectedCompetences.push(name);
     }
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
   this.task.id = Math.random();
   this.httpClient.post('http://localhost:3000/tasks', this.task).subscribe((res:Response)=>{
     console.log(res);
   });
 }

  constructor(private httpClient: HttpClient) {
    this.task= {id:Math.random(), title:"", description:"", question: "", typeDeQuestion: 0, image: "", pdf: "", competences: [], typeDeReponses : 0, reponses: [], taskDifficulty:0, taskDuration:0};
  }

  ngOnInit() {
  }

}
