export type PlayerConfig = {
  siteBase: string;
  smartlink1: string;
  smartlink2: string;
  continueUrl: string;
  facebookGroup: string;
  getpageTitle: string;
  getpageDescription: string;
  getpageFooter: string;
  pauseIntervalMs: number;
  maxPauses: number;
  demoVideoUrl: string;

  // ---- ANTI-BOT ----
  antiBot: {
    enabled: boolean;
    blockHeadless: boolean;
    blockWebDriver: boolean;
    blockNoReferrer: boolean;
    blockMissingPlugins: boolean;
    blockAutomationFlags: boolean;
  };

  // ---- ANTI-ADBLOCK ----
  antiAdblock: {
    enabled: boolean;
    warningTitle: string;
    warningMessage: string;
  };

  // ---- ANTI-BOM-CLICK ----
  antiBomClick: {
    maxClicksPerSecond: number;
    cooldownMs: number;
  };

  // ---- THEME ----
  theme: "dark" | "light";
  histats: {
    enabled: boolean;
    userId: string;
    startParams: string;
    noscriptPixel: boolean;
  };
  shortlinkApi: string;
  shortlinkApiFallback: string;
  shortlinkDomain: string;
};

const origin =
  typeof window !== "undefined" ? window.location.origin + "/" : "/";

export const PLAYER_CONFIG: PlayerConfig = {
  siteBase: origin,

  smartlink1: "https://uplcm.com/4/11522284",
  smartlink2: "https://uplcm.com/4/11522284",
  continueUrl: "https://uplcm.com/4/11522284",
  facebookGroup: "https://www.facebook.com/share/g/1bNTtsiAsX/",
  getpageTitle: "Videy.co",
  getpageDescription:
    "Video is ready to play. If one link doesn't work, try another available link below 👇",
  getpageFooter: "Powered by Videy CDN",
  pauseIntervalMs: 30_000,
  maxPauses: 2,
  demoVideoUrl: "https://vjs.zencdn.net/v/oceans.mp4",

  antiBot: {
    enabled: true,
    blockHeadless: true,
    blockWebDriver: true,
    blockNoReferrer: true,
    blockMissingPlugins: true,
    blockAutomationFlags: true,
  },

  antiAdblock: {
    enabled: true,
    warningTitle: "Adblock Detected",
    warningMessage:
      "Please disable your adblocker to watch the video. Refresh the page after disabling it.",
  },

  antiBomClick: {
    maxClicksPerSecond: 3,
    cooldownMs: 800,
  },

  theme: "dark",
  shortlinkApi: "https://brightdailyhub.my.id/safe/lnkgo_safe.php",
  shortlinkApiFallback: "",
  shortlinkDomain: "https://lnkgo.biz.id",
  histats: {
    enabled: true,
    userId: "5053131", // ← GANTI dengan ID Histats kamu (angka saja)
    startParams: "4,0,0,0,00010000",
    noscriptPixel: true,
  },
};

export function getConfig(): PlayerConfig {
  if (typeof window !== "undefined") {
    const path = window.location.pathname;
    const normalizedPath = path.endsWith("/") ? path : path + "/";
    return {
      ...PLAYER_CONFIG,
      siteBase: window.location.origin + normalizedPath,
    };
  }
  return PLAYER_CONFIG;
}
