a# Memgraph Design

This is a repo containing brand assets for Memgraph:
- Customized ZURB Foundation instance + motion-ui library
- SASS utilities for easier brand application
- Fontello custom icon set
- Brand fonts - Roboto & Encode Sans Semi Condensed

Additionally, there's an option to generate the Styleguide from the available styles.


# Installation

1. Add `"memgraph-ui": "git+https://github.com/memgraph/design.git"` as a dependency to your projects' package.json, then run `npm install`
2. Use [Foundation docs](https://foundation.zurb.com/sites/docs/) or Memgraph styleguide for reference on how to use elements

The compiled styles and ready-to-use assets are in the `_dist` folder, so you can easily reference them in your project. The structure of the folder is as follows:
<pre>
_dist
|-assets  
|  |-fontello
|  |  |-css
|  |  |-font
|  |-fonts
|  |  |-Encode_Sans_Semi_Condensed
|  |  |-Roboto
|  |-img
|  |-libs
|  |  |-foundation-sites
|  |  |-motion-ui
|-css
|  |-memgraph-foundation.css
|  |-memgraph-foundation-app.css
|  |-memgraph-foundation-web.css
</pre>

There are three compiled css files, so use just one of them based on your needs:
* `memgraph-foundation.css` can used as a core stylesheet in general-purpose projects.
* `memgraph-foundation-app.css` can used as a core stylesheet in apps and demos.
* `memgraph-foundation-web.css` can used in web projects (landing pages and similar).

# Usage
## Simple usage
You can just use compiled css from the `_dist` folder, referencing it like this: `<PATH_TO>/memgraph-foundation/_dist/css/memgraph.foundation.css`


## Advanced usage
You can add `memgraph-foundation` SCSS files directly to your project. The SCSS files to include are in `memgraph-foundation/src/scss` folder.

1. Import `memgraph-foundation.scss` to your projects' scss and continue developing from there (change relative paths if needed)
2. You can comment-out custom theme for demos if they're not needed for your project (`theme/demo-theme`)
3. To customize the use of certain Foundation components inside your project (this is highly recommended because it will make the build smaller!), copy the `_foundation.scss` and `_settings.scss` from `memgraph-foundation/src/scss/memgraph-foundation` folder. Comment out all the components you don't need from `_foundation.scss`, and use `_settings.scss` to customize default styles. Link these settings and foundation files into your SCSS workflow if you do this!
4. You can also customize Foundation JavaScript by only including the plugins you need from the Foundation `dist/js` folder to your build.



# Memgraph Styleguide

Simple styleguide has been set up by using Foundation's `style-sherpa`. It serves for developing and adjusting the global Foundation styles and themes. It consists of the main styles index and general demo template for testing. Ideally, every time when basic memgraph-foundation styles are updated, the styleguide should be updated too using `gulp buildStyleguide` (it it's published online).
This command will create the `_styleguide` folder with the following folder structure:

<pre>
_styleguide
|-assets
|  |-fontello
|  |  |-css
|  |  |-font
|  |-fonts
|  |  |-Encode_Sans_Semi_Condensed
|  |  |-Roboto
|  |-img
|  |-libs
|  |  |-foundation-sites
|  |  |-motion-ui
|-css
|-styleguide.html
|-demo-general.html
 </pre>
  
  
# LaTeX Document Templates

In `/latex` folder you can find on-brand document templates used so far for presentations or other types of documents.
