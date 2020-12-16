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
    //this is where it starts to differ from the earlier version.
    let satellitesURL = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesURL).then(function(response) {
      response.json().then(function(data){

    let fetchedSatellites = data.satellites;
            
        for (let i = 0; i < fetchedSatellites.length; i++) {

          //this.sourceList.push(satellite) = [
          //  new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
          return console.log(fetchedSatellites[i].name)
          //]
        }
        }.bind(this));    
    }.bind(this));
  }
}


          //DONE////// TODO: loop over satellites

         // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
         // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
      //console.log(fetchedSatellites)
      //console.log(fetchedSatellites[0])



