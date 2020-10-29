

class Ajoutpersonne{
    
        constructor(nom,prenom,age){
            this.nom = nom,
            this.prenom = prenom,
            this.age = age
            
        }
    

    ajout=(nom,prenom,age)=>{
        let tab = [];
        let item={
            id: tab.length + 1,
            nom:this.nom,
            prenom:this.prenom,
            age : this.age
        }
    
        tab.push(item);
        console.log(tab);
        return tab;
}



}


let personne1 = new Ajoutpersonne('kouakou','stephanie',20);
let personne2 = new Ajoutpersonne('kouakou','stephanie',30);
let personne3 = new Ajoutpersonne('kouakou','stephanie',20);
personne1.ajout();
personne2.ajout();
personne3.ajout();





