# Ethereum Polis Conversation Template

A template for creating Polis conversations about Ethereum topics.

## Customizing for Your Topic

To create a new conversation about a different Ethereum topic:

1. **Update the configuration in `src/config.ts`**:
   
   All you need to do is edit these values in the `config` object:
   
   ```typescript
   export const config: ConversationConfig = createConfig({
     topic: "YourTopic",              // The main topic, e.g., "EOF", "EIP-4844"
     description: "Your description", // A brief description of the topic
     whatIs: "Explanation of what it is...", // Technical explanation
     why: "Why this conversation matters...", // Importance of the conversation
     polisConversationId: "your-polis-id", // From polis.io
     contributors: [
       { displayName: "Name", handle: "handle" },
       // Add more contributors as needed
     ]
   });
   ```
   
   All other metadata (site URL, page titles, etc.) will be automatically generated based on your topic!

2. **Update the Open Graph image**:
   - By default, it uses `/og-image.png` from the static directory
   - To customize, simply place your new image in the `static` directory with the same name

3. **(Optional) Update the diagram**:
   - Replace `static/education-diagram.png` with a relevant diagram for your topic

## How It Works

- **Configuration**: All site settings are defined in `src/config.ts`
- **Metadata**: Page title, description, OpenGraph tags, etc. are dynamically generated
- **Helpers**: The implementation details are hidden in `src/lib/configHelpers.ts`

## Development

Once you've customized the configuration, start a development server:

```bash
bun install    # Install dependencies (first time only)
bun dev        # Start development server

# or start the server and open the app in a new browser tab
bun dev --open
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
