const TIMING_STORAGE_KEY = "challenge-timing";

// Challenge timing helper functions
export const startChallengeTimer = (challengeId: number): void => {
  try {
    const stored = localStorage.getItem(TIMING_STORAGE_KEY);
    const timingData = stored ? JSON.parse(stored) : {};
    timingData[challengeId] = {
      startTime: Date.now(),
      endTime: null,
    };
    localStorage.setItem(TIMING_STORAGE_KEY, JSON.stringify(timingData));
  } catch (error) {
    console.error("Error starting challenge timer:", error);
  }
};

export const finishChallengeTimer = (challengeId: number): void => {
  try {
    const stored = localStorage.getItem(TIMING_STORAGE_KEY);
    if (stored) {
      const timingData = JSON.parse(stored);
      if (timingData[challengeId]) {
        timingData[challengeId].endTime = Date.now();
        localStorage.setItem(TIMING_STORAGE_KEY, JSON.stringify(timingData));
      }
    }
  } catch (error) {
    console.error("Error finishing challenge timer:", error);
  }
};

export const getChallengeTimeSpent = (challengeId: number): number | null => {
  try {
    const stored = localStorage.getItem(TIMING_STORAGE_KEY);
    if (stored) {
      const timingData = JSON.parse(stored);
      const challenge = timingData[challengeId];
      if (challenge?.startTime && challenge?.endTime) {
        return challenge.endTime - challenge.startTime; // Returns milliseconds
      }
    }
  } catch (error) {
    console.error("Error getting challenge time spent:", error);
  }
  return null;
};

export const formatTimeSpent = (milliseconds: number): string => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds % 60}s`;
  } else {
    return `${seconds}s`;
  }
};
