import { getManifest } from '@angular-architects/module-federation';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CustomManifest, CustomRemoteConfig } from '../utils/config';
import { buildRoutes } from '../utils/routes';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  public remotes: BehaviorSubject<CustomRemoteConfig[]> = new BehaviorSubject<
    CustomRemoteConfig[]
  >([]);
  constructor(private router: Router) {
    this.initRoutes();
  }

  initRoutes() {
    const manifest = getManifest<CustomManifest>();
    const routes = buildRoutes(manifest);
    this.router.resetConfig(routes);
    this.remotes.next(Object.values(manifest));
  }
}
