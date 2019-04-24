export class Task2{
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
    public reponses: String[]
    //public difficulty : number,
    //public duration : number
){}


}
