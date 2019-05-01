export class Task{
constructor(
    public id: number,
    public title: String ,
    public description: String ,
    public question: String,
    public typeDeQuestion: number,
    public image: String,//si enregistré sur serveur
    public pdf: String,//si enregistré sur serveur
    public competences: String[],
    public typeDeReponses: number,
    public reponses: String[],
    public taskDifficulty : number,
    public taskDuration : number
){}


}