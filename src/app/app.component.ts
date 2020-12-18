import { Satellite } from './satellite';
import { Component } from '@angular/core'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];

  constructor(){
    this.sourceList = []; 
    this.displayList = [];    ///////////////should this be this.displayList??????? 
    let satellitesURL = 'https://handlers.education.launchcode.org/static/satellites.json';
    window.fetch(satellitesURL).then(function(response) {
    response.json().then(function(data){
   
    let fetchedSatellites = data.satellites
            
        for (let i = 0; i < fetchedSatellites.length; i++) {
          let satellite = {}                                   

            satellite = new Satellite (
            fetchedSatellites[i].name, 
            fetchedSatellites[i].type, 
            fetchedSatellites[i].launchDate, 
            fetchedSatellites[i].orbitType, 
            fetchedSatellites[i].operational
          )   


        this.sourceList.push(satellite);

        }
        this.displayList = this.sourceList.slice(0); // HUH??????
        }.bind(this));    
    }.bind(this));
  }
  search(searchTerm:string):void {            // <-- DO NOT FUCK WITH THIS STARTING HERE.
    let matchingSatellites:Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let i = 0; i < this.sourceList.length; i++) {
      let name = this.sourceList[i].name.toLowerCase();
      if (name.indexOf(searchTerm) >= 0) {
        matchingSatellites.push(this.sourceList[i]);
      }
    }
    //assign this.displayList to be the array of matching satellites
    //this will cause Angular to remake the table, but now only containing mates.
    this.displayList = matchingSatellites;
  }
}





