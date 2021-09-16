const SortedMap = require("collections/sorted-map");

// create an interval_map class

class IntervalMap {
  constructor(sortedMap = new SortedMap()) {
    // <=== declaring a map object as an arguement, to access the map inside any methods.
    this.sortedMap = sortedMap;
  }
  // insertion method
  // 1- the insertion method takes a pair of K values K1,K2 and a single V value.
  // 2 - The interval defined by the new pair overrides the existing interval(s).

  insert(K, V) {
    this.sortedMap(K, V);
  }
}

// A function for pairing keys, K1 and K2 which returns an array of paired keys(K);

function makePair(K1, K2) {
  return [K1, K2];
}
