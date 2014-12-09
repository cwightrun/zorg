# Zorg

> Zorg: If you want something done, do it yourself.

![Zorg](http://img2.wikia.nocookie.net/__cb20120505004033/villains/images/2/28/Jean-Baptiste_Emanuel_Zorg.jpg)

Zorg is a Drupal 7 starter theme borrowing structural elements from [Boron], using SASS and Susy.

  - Sass is awesome
  - Susy is awesome
  - Therefore, Zorg is awesome

All-in-all this is a basic way to keep up the starter theme I use for producing Drupal 7 based presentations from scratch.

There are no base grid sizes, as Susy is relative.

I've kept the following templates *mostly* stock:
 * `block.tpl.php`
 * `page.tpl.php`
 * `node.tpl.php`
 * `html.tpl.php` - this has RDF integrations

The template.php functions provide additional page.tpl naming structures for content types: `page__[content-type].tpl.php`

For instance, to provide a page template specifically for webforms, `page__webform.tpl.php` would do the trick.

### Version
0.0.1

### Libs

Zorg uses a number of open source projects to work properly:

* [SASS] - CSS with Superpowers
* [Susy] - Power tools for the web
* [Grunt] - The JavaScript Task Runner
* [node.js] - Necessary for Sass/Susy
* [jQuery] - duh

### Installation & Usage

You need Grunt installed:

```sh
$ git clone [git-repo-url] zorg
$ cd zorg
$ grunt
```

### Todo

* Convert from Grunt to [Gulp]

### Questions?

You can reach out to me at [@cwightrun] on Twitter.

---

[Boron]:https://www.drupal.org/project/boron
[Sass]:http://sass-lang.com/
[Susy]:http://susy.oddbird.net/
[Grunt]:http://gruntjs.com/
[Gulp]:http://gulpjs.com/
[node.js]:http://nodejs.org
[jQuery]:http://jquery.com
[@cwightrun]:http://twitter.com/cwightrun
