import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PageDto} from "./dto/PageDto";
import {NavigationDto} from "./dto/NavigationDto";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  getPageById(id:String) {
    return this.http.get<PageDto>(this.url+"/page/"+ id);
  }

  getAllPages() {
    return this.http.get<PageDto[]>(this.url+"/page");
  }

  getNavigations() {
    return this.http.get<NavigationDto[]>(this.url+"/navigation");
  }



}
