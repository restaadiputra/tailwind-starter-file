# TailwindCSS Starter File

A simple TailwindCSS starter file to start your project with TailwindCSS



## Getting Started

These instructions will guide how to use the starter file from creating configs to build for production.

### Prerequisites

Install all dev dependencies

```shell
npm install
```



### Create TailwindCSS config file (js)

TailwindCSS config file can be found in `configs/tailwind.config.js`. If you happen lost that file you can easly generate it by running:

```shell
npm run tailwind:init
```

or if you want the full configs, you can use:

```shell
npm run tailwind:full
```



### Create TailwindCSS config file (css)

TailwindCSS config file can be found in `configs/tailwind.config.css`. This file will be used when creating the css file from TailwindCSS. You can read more in [here](https://tailwindcss.com/docs/installation#2-add-tailwind-to-your-css)



### Build the CSS file of TailwindCSS only (using PostCSS)

You can build the css file using PostCSS by using:

```shell
npm run build:css
```

This command will generate a `style.css` file in `src` directory.



### Build for production

For production build, you can use

```shell
npm run build:prod
```

This command will run two basic command, first it will generate TailwindCSS file using `production` environment and second it will create minified HTML file. those two file will be put ini `build` directory.



### Running for development

For you to easy run the development website, you can use:

```shell
npm run dev
```

This command will create the TailwindCSS <u>WITHOUT</u> using `production` environment so the file will be large and run the `live-server` at port `3000`.



### Running for production

For you to easy run the production website, you can use:

```shell
npm run prod
```

This command will create the TailwindCSS using `production` environment so the file will be minified and run the `live-server` at port 8080.



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
