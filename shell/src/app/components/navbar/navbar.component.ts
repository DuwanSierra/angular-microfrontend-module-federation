import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InitService } from 'src/app/services/init.service';
import { CustomRemoteConfig } from 'src/app/utils/config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public remotes: BehaviorSubject<CustomRemoteConfig[]> = new BehaviorSubject<
    CustomRemoteConfig[]
  >([]);

  constructor(private initService: InitService){
    this.getData();
  }

  private getData(){
    this.remotes = this.initService.remotes;
  }
}
