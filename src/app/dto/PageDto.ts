import {ContainerDto} from "./ContainerDto";

export class PageDto {
  id: String = "";
  name: string = "";
  description: String = "";
  isNavigation: Boolean = false;
  container:ContainerDto[] = [];
}
