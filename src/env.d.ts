/// <reference types="astro/client" />

export {};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    __ga_loaded?: boolean;
    gwOpenCookieSettings?: () => void;
  }
}
