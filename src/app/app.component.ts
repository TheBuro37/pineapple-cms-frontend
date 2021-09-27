import { Component } from '@angular/core';
import {HttpService} from "./http.service";
import {PageDto} from "./dto/PageDto";
import {Title} from "@angular/platform-browser";
import {NavigationDto} from "./dto/NavigationDto";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pineapple-cms-frontend';

  constructor(private httpService: HttpService,private titleService: Title, private route: ActivatedRoute) {}

  public id: string | null | undefined;

  page : PageDto | any;

  navigations: NavigationDto[] | any;

  ngOnInit() {

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
