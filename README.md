# Boilerplate Using Gulp & Webpack
Basic component template for using html, sass and vanilla javascript to build components. See readme below for options.


## Requires

- [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
- [Webpack](https://github.com/webpack)
- [Node](https://nodejs.org/en/download/)

## Build

Run 'npm install' to install the required dependencies:

```
$ npm install
```

Run 'gulp serve' to build, serve the site up locally and start watching files:

```
$ gulp serve
```

localhost:
[http://localhost:3000](http://localhost:3000)

---

## Task List

#### Build

Compile and Bundle

```
$ gulp build
```

#### Serve

Compile, Bundle, Serve in local browser, watch

```
$ gulp serve
```

## Individual Tasks

#### Include

Include Component Partials to Page Layouts, Inject CSS/JS Bundles

```
$ gulp include
```

#### CSS

Compile Sass, Add Prefixes, Add Sourcemaps

```
$ gulp styles
```

#### Minify CSS

Optimize/minify Stylesheets

```
$ gulp minstyles
```

#### JS

Bundle Javascript

```
$ gulp scripts
```

#### Images

Optimize Images (GIF, PNG, JPEG only)

```
$ gulp images
```

#### SVG

Optimize/minify SVG

```
$ gulp svgo
```

#### Watch

Watch files for changes, Run BrowserSync

```
$ gulp watch
```

---
