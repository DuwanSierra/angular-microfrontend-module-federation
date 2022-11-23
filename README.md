Generate MF Host
1. Generate project ng generate
2. Execite this in MF: ng add @angular-architects/module-federation --project [MF_HOST] --port [MF_PORT] --type dynamic-host
Generate MF remotes
1. Generate project ng generate
2. Execute this in MF: ng add @angular-architects/module-federation --project [MF_NAME] --port [MF_PORT] --type remote


Generate configs in MF Host
1. The MF config is in mf.manifiest.json
2. Generate file /src/app/utils/config.ts
3. Generate file /src/app/utils/routes.ts
4. The files generate routes dinamic with de mf.manifiest.json
5. Modify app-routing.module.ts add export to routes
6. Modify app.component.ts add logic to edit/add routes dynamic from mf.manifiest.json

Generate configs in MF Remotes
1. Create module entry point, it's another and routes start after base path
2. Modify webpack.config.js and export Module entry point 
3. Modify app-routing.module.ts to routes redirect to Module create before in step 1 