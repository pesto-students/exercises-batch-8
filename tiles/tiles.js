
function tiles({ small, big, target }) {
  const BIG_TILE_SIZE = 5;
  const SMALL_TILE_SIZE = 1;
  const neededNumberOfBigTiles = Math.floor(target / BIG_TILE_SIZE);
  const usedBigTiles = neededNumberOfBigTiles < big ? neededNumberOfBigTiles : big;
  const remainingTarget = target - (usedBigTiles * BIG_TILE_SIZE);
  return small * SMALL_TILE_SIZE > Math.round(remainingTarget / SMALL_TILE_SIZE);
}

export {
  tiles,
};
