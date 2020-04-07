const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ["src/**/*.html"],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano')({
      preset: "default"
    }),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}