const HINTS_STORAGE_KEY = "challenge-hints";

// Helper functions for localStorage
export const getVisibleHintsFromStorage = (challengeId: number): number => {
  try {
    const stored = localStorage.getItem(HINTS_STORAGE_KEY);
    if (stored) {
      const hintsData = JSON.parse(stored);
      return hintsData[challengeId] || 0;
    }
  } catch (error) {
    console.error("Error reading hints from localStorage:", error);
  }
  return 0;
};

export const saveVisibleHintsToStorage = (challengeId: number, count: number) => {
  try {
    const stored = localStorage.getItem(HINTS_STORAGE_KEY);
    const hintsData = stored ? JSON.parse(stored) : {};
    hintsData[challengeId] = count;
    localStorage.setItem(HINTS_STORAGE_KEY, JSON.stringify(hintsData));
  } catch (error) {
    console.error("Error saving hints to localStorage:", error);
  }
};
