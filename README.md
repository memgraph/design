# Memgraph Design

A repo containing brand assets for Memgraph.
- Customized ZURB Foundation instance
- SASS utilities for easier brand application
- Fontello custom icon set
- Brand fonts - Roboto & Encode Sans Semi Condensed

# Use in projects

1. Add `"memgraph-ui": "git+https://github.com/memgraph/design.git"` as a dependancy to your projects' package.json, then run `npm install`
2. Import `memgraph-foundation.scss` to your projects' scss and continue developing from there
3. Use [Foundation docs](https://foundation.zurb.com/sites/docs/) or Memgraph styleguide for reference on how to use elements

To customize the use of Foundation components inside your project, copy the `_foundation.scss` and `_settings.scss` from Memgraph Foundation scss folder.
You can also customize Foundation JavaScript by only including the plugins you need from the Foundation `dist/js` folder to your build.

You can also just use compiled css from the `dist` folder. (TBD)


# Styleguide use

Simple styleguide has been set up by using `style-sherpa`. Every time basic Memgraph foundation styles are updates, the styleguide should be update too by using Gulp.
Run `gulp sass` to compile customized foundation.
Run `gulp styleGuide` to create updated styleguide.

