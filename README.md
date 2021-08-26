<p align="center">
  <img src="https://koyu.space/img/pb-icon.svg">
</p>

# koyu.space

So here's the deal: we all work on this code, and then it runs on koyu.space. Can you dig it?

**koyu.space is a fork of glitch-soc**

## Instructions

If you want the full source code please clone with the `css-plugins` submodule since it contains the koyu.space spice like instant noodles we eat while we work on that code. This submodule contains things like stickers, instance tickers and many more koyu.space features.

## Changing things around

Logo: `css-plugins/logo.scss`

Disable CSS plugins: `app/javascript/styles/application.scss`

Hop button: `app/javascript/flavours/glitch/features/compose/components/publisher.js`

Sidebar content (simple UI): `app/javascript/flavours/glitch/features/ui/components/navigation_panel.js`

Sidebar content (advanced UI): `app/javascript/flavours/glitch/features/getting_started/index.js`

About page (you may have to add a few lines of CSS code to make it work properly with yours): `app/views/about/show.html`

And probably many more things that are getting documented soon

## Adding pictures to the front-page

Fork this repository and add your picture in the `public/about-assets/pictures/` folder and change the file `public/about-assets/pictures.json` to include your picture along with metadata about yourself for attribution. If you did that submit a pull request to add your new picture.

## Building a Docker image

Just hit `docker build .` and wait. Prebuilt images are at `koyuawsmbrtn/mastodon` and already referenced in the `docker-compose.yml` file. Using Docker is the preferred less painful method to get a server up and running quickly.


## Differences between glitch-soc, Mastodon and koyu.space

### Added glitch-soc features

-   [Media improvements](https://glitch-soc.github.io/docs/features/media/)
    -   Images inside the CW spoiler
    -   fullwidth images
    -   scaling options
-   [Formatted posts](https://glitch-soc.github.io/docs/features/rich-text)
-   [Reply selection in lists](https://glitch-soc.github.io/docs/features/lists-show-replies-to/)
-   [Filter improvements](https://glitch-soc.github.io/docs/features/filter-improvements/)
-   [Highlighting of misleading links](https://glitch-soc.github.io/docs/features/misleading-link-highlighting/)
-   [Hiding follower count](https://glitch-soc.github.io/docs/features/hide-follower-count/)
-   [An app settings modal](https://glitch-soc.github.io/docs/features/app-settings/)
-   [Collapsible posts](https://glitch-soc.github.io/docs/features/collapsible-toots/)
-   [Toot visibility icons](https://glitch-soc.github.io/docs/features/visibility-icons/)
-   [Local-only posts](https://glitch-soc.github.io/docs/features/local-only-toots/)
-   [Threaded mode](https://glitch-soc.github.io/docs/features/threaded-mode/)
-   [`data-*` attributes on statuses](https://glitch-soc.github.io/docs/features/status-data-attributes/) for custom CSS targeting
-   [Advanced theming via flavours+skins](https://glitch-soc.github.io/docs/features/themes/)
-   [Doodle](https://glitch-soc.github.io/docs/features/doodle/)

### Added koyu.space features

- [GIFs by Giphy](https://giphy.com)
- [Google Translate](https://translate.google.com)
- Stickers
- Custom logo and themes
- [Jitsi](https://meet.jit.si) integration
- [InstanceTicker](https://miy.pw)
