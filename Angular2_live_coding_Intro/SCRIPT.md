# Setup
* NPM is installed.
* I use nvm to have multiple node version and packages in the same machine
* We'll install the angular2 CLI. For those who might have tried ember, this is
close to the ember cli. Actually, they likely started from a fork, some error
messages still mention ember :). `npm install -g angular-cli`
* type `ng` to see the list of commands (quite a few)

# Create an app
* `ng new test_app`
* Let's see what batteries they included
** package.json
** typings.json
** ng test (karma + jasmine)
** ng e2e (protractor)
** Let's remove the sample app as it comes with several things that we want to discover
step by step `rm -rf src/app`
* Let's change the config for UT: Phantom instead of Chrome


# TOC
* AppComponent
** Component
** attributes
** template (and decorator)
** styles
** data bindings (one-way) --> big diff with angularJS

# TODO - script
* Angular module (at startup or async load)
* bootstrap - we can precompile the app (JIT vs AOT)
* Typescript typings
* pipe
* route (async route?)
* DI (services, @Injectable)
* 2 way data binding
* Structural directives (ngIf, ngFor)
* Attribute directives (ElementRef)
* http requests
* no middleware/http filters/interceptors (https://github.com/angular/http/issues/80)
* event binding
* host property in the @Component decorator
* property binding (`[class.hide]= "'foo' === 'bar'"`)
* Component input
* Lifecycle event (OnInit)
* a bit of RxJs in the service
* eventEmitter
