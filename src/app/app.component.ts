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

  constructor(){
    this.sourceList = [];  
    let satellitesURL = 'https://handlers.education.launchcode.org/static/satellites.json';
    window.fetch(satellitesURL).then(function(response) {
    response.json().then(function(data){
   
    let fetchedSatellites = data.satellites;

            
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
        }.bind(this));    
    }.bind(this));
  }
}





