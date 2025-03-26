# Ethereum Polis Conversation Template

A template for creating parameterized Polis conversations about Ethereum topics. This project is built with SvelteKit and provides a beautiful, modern interface for hosting Polis conversations.

## Customizing for Your Topic

To create a new conversation about a different Ethereum topic:

1. Update the configuration in `src/config.ts`:
   - Set your `topic` (e.g., "EIP-4844", "Account Abstraction")
   - Write your `description` explaining the topic
   - Define `whatIs` to explain the technical details
   - Write `why` to explain the importance of the conversation
   - Update `polisConversationId` with your Polis conversation ID
   - Update `ogImage` path if you have a custom image
   - Update `contributors` list with your team members

2. Update the Open Graph image:
   - Create a new image for your topic
   - Place it in the `static` directory
   - Update the `ogImage` path in `config.ts`

3. (Optional) Update the diagram:
   - Replace `static/education-diagram.png` with a relevant diagram for your topic

## Development

Once you've customized the configuration, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
