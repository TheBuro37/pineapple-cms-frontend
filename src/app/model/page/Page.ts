import {Container} from "./Container";

export class Page {
  id: String = "";
  name: string = "";
  description: String = "";
  isNavigation: Boolean = false;
  container: Container = new Container();
}
