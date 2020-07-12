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

And probably many more things that are getting documented soon

## Building a Docker image

Just hit `docker build .` and wait. Prebuilt images are at `koyuawsmbrtn/mastodon` and already referenced in the `docker-compose.yml` file. Using Docker is the preferred less painful method to get a server up and running quickly.
