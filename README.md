[![Build Status][travis ci img]][travis ci] &emsp;
[![Angular CLI Version][angular cli img]][angular cli] &emsp;
![Teams][teams img]

# Vintage Computing Competition 2018

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

Live site available at [lukecmstevens.co.uk/vintage-computing](http://lukecmstevens.co.uk/vintage-computing)

## Documentation
 - [Adding or amending team options](#Adding-or-amending-team-options)
 - [Team Info Schema](#team-info-schema)
 - [Adding gifs](#adding-gifs)
 - [Adding images](#adding-images)
 - [Angular options](#angular-options)

 ---

### Adding or amending team options

To add or amend team options simply either fork the project and make a pull request with the change to your teams `info.json` file, or just drop me a message on slack.

---

### Team Info Schema

The data for each team page is powered by an `info.json` file in the teams `assets/teams` folder.
Below is a sample json file that demonstrates the data which can be stored;
```
  {
    "name" : "name",
    "members" : [
      "Member 1",
      "Member 2"
    ],
    "gif1" : "torch.gif",
    "gif2" : "parrot.gif",
    "tagline" : "This is the team tagline!",
    "machineImages" : [
      {
        "img" : "picture1.png",
        "caption" : "This is a picture!"
      },
      {
        "img" : "picture2.png",
        "caption" : "This is also a picture!"
      }
    ],
    "scores" : [
      {
        "score" : 2735,
        "date" : "2018-08-31",
        "img" : "3dmark_screenshot.png"
      }
    ],
    "parts" : [
      {
        "name" : "Motherboard",
        "cost" : 15.99
      },
      {
        "name" : "Pentium D 940",
        "cost" : 3.87
      }
    ]
  }
```

#### Variables

`name` &emsp; The team name

`members` &emsp; A list of team members

`gif1` &emsp; An image to display either side of the 'Team members' list. See [adding gifs](#adding-gifs)

`gif2` &emsp; An image to display either side of the 'Parts' list. See [adding gifs](#adding-gifs)

`tagline` &emsp; An optional tagline to be displayed below your team name

`machineImages` &emsp; A list of references to images of your machines with captions. See [adding images](#adding-images)

`scores` &emsp; A list of scores achieved using 3DMark benchmark software, including the date recorded and a screenshot. See [adding images](#adding-images)

`parts` &emsp; A list of parts purchased so far and their costs

---

### Adding gifs

Gifs which you wish to use in your team info page should be downloaded and added to the `assets/images/` folder. These should then be referenced using their simple name, without the path. e.g. `torch.gif`.

---

### Adding images

Machine images and score screenshots should be downloaded and added to the `assets/team/<TEAM-NAME>/` folder, WHERE `<TEAM-NAME>` is the name of your team. These should then be referenced using their simple name, without the path. e.g. `screenshot1.png`.

---

### Angular options

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

[travis ci img]:https://travis-ci.org/lukecmstevens/vintage-computing.svg?branch=master
[travis ci]:https://travis-ci.org/lukecmstevens/vintage-computing

[angular cli img]:https://img.shields.io/badge/Angular%20CLI-v6.1.5-red.svg
[angular cli]:https://cli.angular.io/

[teams img]:https://img.shields.io/badge/dynamic/json.svg?label=teams&url=http%3A%2F%2Flukecmstevens.co.uk%2Fvintage-computing%2Fassets%2Fjson%2Fteams.json&query=%24.length&colorB=green
