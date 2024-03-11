export function metersToKilometers(visibilityInMeters: number): string {
    const visibilityInKilometers = (visibilityInMeters / 1000).toFixed(0);
    return visibilityInKilometers + " km";
}