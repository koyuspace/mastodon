<p align="center">
  <img src="public/img/pb-icon.svg">
</p>

# koyu.space

So here's the deal: we all work on this code, and anyone who uses that does so absolutely at their own risk. Can you dig it?

**koyu.space is a fork of glitch-soc**

## Changing things around

Logo: `public/img/pb-icon.svg`

Disable CSS plugins: `app/javascript/styles/application.scss`

Hop button: `app/javascript/flavours/glitch/features/compose/components/publisher.js`

Sidebar content (simple UI): `app/javascript/flavours/glitch/features/ui/components/navigation_panel.js`

Sidebar content (advanced UI): `app/javascript/flavours/glitch/features/getting_started/index.js`

## Self-hosting

Follow the standard Mastodon documentation for installing from source, but change the git repository to this one and compile the Ruby version referenced in the `.ruby-version` file.

### (Optional) Adding #InstanceTicker to koyu.space

Go to the custom CSS section of your instance and add the following code to enable #InstanceTicker:

```css
@import url(https://34.si/402/1.css);
@import url(https://34.si/330/1.css);

.compose-form::after {
  display: none !important;
}
```

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

### Added or supported koyu.space features

- [GIFs by Tenor](https://tenor.com)
~~- [Google Translate](https://translate.google.com)~~
- Stickers
- Custom logo and themes
- [Jitsi](https://meet.jit.si) integration
