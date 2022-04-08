import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private myHttp :HttpClient) {}
 getCourseConfigs(){
   return this.myHttp.get('https://httpstat.us/202');
 }

 getCourseList(){
   return this.myHttp.get('assets/mock-data/course-list.json')
 }
  
}
