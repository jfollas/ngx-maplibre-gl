import { E2eDriver } from '../support/e2e-driver';

describe('Toggle terrain control1', () => {
  let driver = new E2eDriver();

  it('should toggle terrain rendering', () => {
    driver.when
      .visit('/demo/terrain-control')
      .when.wait(1000)
      .given.exists('canvas')

      // Map loads with Terrain disabled
      .when.wait(4000)
      .when.takeImageSnapshot()

      // Enable Terrain
      .when.clickControlButton('.maplibregl-ctrl-terrain')
      .when.wait(4000)
      .when.isCurrentImageNotEqualToSnapshot()

      // Disable Terrain
      .when.clickControlButton('.maplibregl-ctrl-terrain-enabled')
      .when.wait(4000)
      .when.isCurrentImageEqualToSnapshot();
  });
});
