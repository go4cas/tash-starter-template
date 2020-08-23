# Template for the TASH Stack Starter

> Template repo for creating a TASH (**T**ailwind.css, **A**lpine.js, **S**purce,.js and alpine.js magic **H**elpers) stack starter app.

> Heavily inspired by the [Alpine Experiments](https://github.com/ryangjchandler/alpine-experiments) from [Ryan Chandler](https://github.com/ryangjchandler)!


# {{package-title}}
{{package-description}}

## What is included?
* [Tailwind.css](https://tailwindcss.com) for compoent styling
* [Alpine.js](https://github.com/alpinejs/alpine) for reactivity and component logic
* [Spruce](https://github.com/ryangjchandler/spruce) for application state management
* [Alpine Magic Helpers](https://github.com/KevinBatdorf/alpine-magic-helpers) for additinal sugar

You get the following out of the box:
* Apline.js, Spruce and Alpine Magic Helper libs loaded from CDN
* Customizable Tailwind.css
* Central application store, using Spruce
* Component logic split in separate files
* Dev server, with live reload
* Production ready build, including Tailwind.css custom build, js and css logic minification and static assets


## Getting Started

Simply click the **Use this template** button of this repo, and follow the [Github Guide](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

Remember to replace the following placeholder variables with your own:

<details>
  <summary>{{author-name}} - example: Cas du Plessis</summary>

  * [README.md](README.md#L108)
  * [package.json](package.json#L23)
  * [LICENSE.md](LICENSE.md#L3)
</details>

<details>
  <summary>{{author-email}} - example: go4cas@gmail.com</summary>

  * [README.md](README.md#L108)
  * [package.json](package.json#L23)
</details>

<details>
  <summary>{{github-name}} - example: go4cas</summary>

  * [README.md](README.md#L108)
</details>

<details>
  <summary>{{current-year}} - example: 2020</summary>

  * [LICENSE.md](LICENSE.md#L3)
</details>

<details>
  <summary>{{package-title}} - example: tash-demo</summary>

  * [README.md](README.md#L8)
</details>

<details>
  <summary>{{package-description}} - example: Demo app for the TASH (Tailwind.css, Alpine.js, Spruce,.js and alpine.js magic Helpers</summary>

  * [README.md](README.md#L9)
  * [package.json](package.json#L4)
</details>

<details>
  <summary>{{package-slug}} - example: go4cas/tash-demo</summary>

  * [package.json](package.json#L7)
</details>

<details>
  <summary>{{package-slug-short}} - example: tash-demo</summary>
</details>


### Installing

* From the project root folder, install all the development dependancies, by running
```bash
npm install
```
* To start the hot reload dev server, run
```bash
npm run watch
```

## Deployment

* Build your production ready assests, by running
```bash
npm run build
```
* Copy/push the content of the newly created `dist` folder to your webserver, using your favourite deployment tool

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/go4cas/tash-starter-template/tags).

## Authors

* **{{author-name}}** - [{{github-name}}](https://github.com/{{gitub-name}})

See also the list of [contributors](https://github.com/go4cas/CONTRIBUTORS.md) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Ryan Chandler](https://github.com/ryangjchandler)
