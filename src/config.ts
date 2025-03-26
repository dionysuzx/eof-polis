export interface ConversationConfig {
  topic: string;
  description: string;
  whatIs: string;
  why: string;
  polisConversationId: string;
  ogImage: string;
  contributors: {
    displayName: string;
    handle: string;
  }[];
}

export const config: ConversationConfig = {
  topic: "EOF",
  description: "EVM Object Format (EOF) is a proposed change to Ethereum's EVM. It is planned for Fusaka, but there is lots of push in both directions.",
  whatIs: "EOF (EVM Object Format) is a proposed restructuring of EVM bytecode into a more formalized container format with separate sections for code and data. It aims to make the EVM more efficient, secure, and easier to analyze.",
  why: "Productive conversation is crucial for Ethereum's progress. EOF is a contentious topic, and we want to find out ways to move forward through discovering common ground. This Polis conversation seeks to identify areas of agreement and thoughtful disagreements, providing insights that could help shape the future of planned upgrades like EOF.",
  polisConversationId: "6ah2kbkpct",
  ogImage: "/og-image.png",
  contributors: [
    { displayName: "chaskin.eth", handle: "chaskin.eth" },
    { displayName: "dionysuz.eth", handle: "dionysuz.eth" },
    { displayName: "joshdavis.eth", handle: "joshdavis.eth" },
    { displayName: "raymondz.eth", handle: "rz" }
  ]
}; 