import { Component, OnInit } from '@angular/core';
import {PageDto} from "../dto/PageDto";
import {NavigationDto} from "../dto/NavigationDto";
import {HttpService} from "../http.service";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(private httpService: HttpService,private titleService: Title, private route: ActivatedRoute) { }

  public id: string | null | undefined;

  page : PageDto | any;

  navigations: NavigationDto[] | any;

  ngOnInit():void {

    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id != null)
    {
      this.httpService.getPageById(this.id).subscribe(value => {
        this.page = value;

        this.titleService.setTitle(this.page.name);

      },error => {
        console.log(error);
      },() => {

      });

      this.httpService.getNavigations().subscribe(value => {
        this.navigations = value;
      },error => {

      },() => {

      });
    }
  }

}
