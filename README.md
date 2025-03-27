# Ethereum Polis Conversation Template

A template for creating Polis conversations about Ethereum topics.

## Customizing for Your Topic

To create a new conversation about a different Ethereum topic:

- [ ] Update your configuration in `./src/config.ts`.
- [ ] Update the images:
  - [ ] Open Graph image in `./static/og-image.png`
  - [ ] Educational diagram in `./static/educational-diagram.png`
  - [ ] Favicon in `./static/favicon.svg`

## Development

Once you've customized the configuration, start a development server:

```bash
bun install    # Install dependencies (first time only)
bun dev        # Start development server
```

## Building and Deployment

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.

The site is designed to be easily deployed to Cloudflare Pages or any similar static hosting service.

## License

MIT License
