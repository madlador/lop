export function distance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const EARTH_RADIUS_METERS = 6371000;

  const lat1Rad = (lat1 * Math.PI) / 180;
  const lat2Rad = (lat2 * Math.PI) / 180;
  const latDiffRad = ((lat2 - lat1) * Math.PI) / 180;
  const lonDiffRad = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(latDiffRad / 2) * Math.sin(latDiffRad / 2) +
    Math.cos(lat1Rad) *
      Math.cos(lat2Rad) *
      Math.sin(lonDiffRad / 2) *
      Math.sin(lonDiffRad / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS_METERS * c;
}

export async function distanceCurrentToDestination(
  dstLat: number,
  dstLon: number,
): Promise<number> {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const curLat = position.coords.latitude;
          const curLon = position.coords.longitude;
          const dist = distance(curLat, curLon, dstLat, dstLon);
          resolve(Math.round(dist));
        },
        (error) => {
          reject(error);
        },
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser"));
    }
  });
}

export function coveredDistancePercentage(totalDistance: number, currentDistance: number, delta: number = 0) {
  const percentOfTotal = (currentDistance + delta) / totalDistance;
  const percentage = (1 - percentOfTotal) * 100;
  return Math.max(0, Math.min(percentage, 100));
}
