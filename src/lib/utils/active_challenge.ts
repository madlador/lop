import { HINTS_STORAGE_KEY } from "./hints";
import { TIMING_STORAGE_KEY } from "./timing";

const ACTIVE_CHALLENGE_KEY = "active-challenge";

export const setActiveChallenge = (challengeId: number | null): void => {
  try {
    if (challengeId === null) {
      localStorage.removeItem(ACTIVE_CHALLENGE_KEY);
    } else {
      localStorage.setItem(ACTIVE_CHALLENGE_KEY, challengeId.toString());
    }
  } catch (error) {
    console.error("Error setting active challenge:", error);
  }
};

export const getActiveChallenge = (): number | null => {
  try {
    const stored = localStorage.getItem(ACTIVE_CHALLENGE_KEY);
    return stored ? parseInt(stored, 10) : null;
  } catch (error) {
    console.error("Error getting active challenge:", error);
  }
  return null;
};

export const clearActiveChallenge = (): void => {
  setActiveChallenge(null);
};

export const abandonChallenge = (challengeId: number): void => {
  try {
    // Clear timing data
    const stored = localStorage.getItem(TIMING_STORAGE_KEY);
    if (stored) {
      const timingData = JSON.parse(stored);
      delete timingData[challengeId];
      localStorage.setItem(TIMING_STORAGE_KEY, JSON.stringify(timingData));
    }

    // Clear hints data
    const hintsStored = localStorage.getItem(HINTS_STORAGE_KEY);
    if (hintsStored) {
      const hintsData = JSON.parse(hintsStored);
      delete hintsData[challengeId];
      localStorage.setItem(HINTS_STORAGE_KEY, JSON.stringify(hintsData));
    }

    // Clear active challenge
    clearActiveChallenge();
  } catch (error) {
    console.error("Error abandoning challenge:", error);
  }
};
