export const getZoomByDistance = (km) => {
  const minKm = 5;
  const maxKm = 100;
  const minZoom = 14;
  const maxZoom = 8;

  const percentage = (km - minKm) / (maxKm - minKm);

  const fluidZoom = minZoom - percentage * (minZoom - maxZoom);

  return fluidZoom;
};