import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {Page} from "../model/page/Page";
import {Navigation} from "../model/page/Navigation";
import {RowElement} from "../model/page/element/RowElement";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  public id: string | null | undefined;
  public page: Page;
  public navigations: Navigation[] = [];

  constructor(private httpService: HttpService,private titleService: Title, private route: ActivatedRoute) {
    this.page = new Page();
  }

  ngOnInit():void {

    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id != null)
    {
      this.httpService.getPageById(this.id).subscribe(value => {
        this.page = Object.assign(new Page(), value);
      },error => {
        console.log(error);
      },() => {

      });

      this.httpService.getNavigations().subscribe(navigationItems => {
        navigationItems.forEach(item => {
          this.navigations.push(Object.assign(new Navigation(), item));
        });


        console.log( this.navigations)
      },error => {
        console.log(error);
      },() => {

      });
    }
  }

}
