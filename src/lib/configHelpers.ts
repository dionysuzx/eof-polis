import type { ConversationConfig } from '../config';

/**
 * Helper function to generate site URL from topic
 */
export function generateSiteUrl(topic: string): string {
  return `https://${topic.toLowerCase()}-polis.pages.dev`;
}

/**
 * Helper function to generate site name from topic
 */
export function generateSiteName(topic: string): string {
  return `${topic} Polis`;
}

/**
 * Helper function to generate page title from topic
 */
export function generatePageTitle(topic: string): string {
  return `Let's talk about ${topic}`;
}

/**
 * Helper function to generate OG title from topic
 */
export function generateOgTitle(topic: string): string {
  return `${topic} Polis — An Ethereum Social Experiment`;
}

/**
 * Helper function to create a config for a new topic
 */
export function createConfig(options: {
  topic: string;
  description: string;
  whatIs: string;
  why: string;
  polisConversationId: string;
  ogImage?: string;
  twitterCardType?: string;
  contributors: { displayName: string; handle: string }[];
}): ConversationConfig {
  const {
    topic,
    description,
    whatIs,
    why,
    polisConversationId,
    ogImage = "/og-image.png",
    twitterCardType = "summary_large_image",
    contributors
  } = options;

  return {
    topic,
    description, 
    whatIs,
    why,
    polisConversationId,
    ogImage,
    siteUrl: generateSiteUrl(topic),
    siteName: generateSiteName(topic),
    twitterCardType,
    pageTitle: generatePageTitle(topic),
    ogTitle: generateOgTitle(topic),
    contributors
  };
} 