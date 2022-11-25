import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { routes } from '../app-routing.module';
import { AuthGuard } from '../auth/guards/auth.guard';
import { CustomManifest } from './config';

export function buildRoutes(options: CustomManifest): Routes {

    const lazyRoutes: Routes = Object.keys(options).map(key => {
        const entry = options[key];
        return {
            path: entry.routePath,
            canActivate: [AuthGuard],
            loadChildren: () => 
                loadRemoteModule({
                    type: 'manifest',
                    remoteName: key,
                    exposedModule: entry.exposedModule
                })
                .then(m => m[entry.ngModuleName])
        }
    });

    return [...routes, ...lazyRoutes];
}