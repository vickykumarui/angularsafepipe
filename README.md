# AngularSafePipe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


#Adding angular project in github
…or create a new repository on the command line
echo "# angularsafepipe" >> README.md
# if there is esisting .git folder remove it first
rd .git /S/Q
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:vickykumarui/angularsafepipe.git 
or below one is preffered
git remote add origin https://github.com/vickykumarui/angularsafepipe.git
git push -u origin master
                
…or push an existing repository from the command line
git remote add origin git@github.com:vickykumarui/angularsafepipe.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.


########################## Deploying angular application to github
# reference - https://angular.io/guide/deployment

# step 1 install angular-cli-ghpages
npm install -g angular-cli-ghpages

# step 2 do prodbuild and deployment and 
#give base url as --base-href "https://<<your github userid>>.github.io/<<repository name>>"

ng build --prod --base-href "https://vickykumarui.github.io/angularsafepipe"





