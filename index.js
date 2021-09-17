const SortedMap = require("collections/sorted-map");

// create an interval_map class

class IntervalMap {
  constructor(sortedMap = new SortedMap()) {
    // <=== declaring a map object as an arguement, to access the map inside any methods.
    this.sortedMap = sortedMap;
    this.default = 0;
  }
  // insertion method
  // 1- the insertion method takes a pair of K values K1,K2 and a single V value.
  // 2 - The interval defined by the new pair overrides the existing interval(s).

  insert(K, V) {
    // If a new pair intersects with an exisiting pair of intervals, the new one overrides the existing one!
    // In the pair of keys, K1 and K2, K1 is the lower limit and
    // K2 is the upper limit. In short, K1 < K2.

    const [k1, k2] = K; // destructure an array of paired keys.

    if (!this.sortedMap.length) {
      this.sortedMap.add(V, K);
    } else {
      this.sortedMap.forEach((val, key) => {
        // Check if the new pair of keys intersect the existing one.
        // If the new lowerend(minimum) key(k1) is less than the
        // existing higherend key, i.e, (key[1]), there is an intersection ... remove the old (kay->value) pair.

        if (k1 <= key[1]) {
          this.sortedMap.delete(key);
        }
        this.sortedMap.add(V, K);
      });
    }
  }

  // Lookup method
  // It takes a single K value and returns the V value that corresponds to the interval that K falls into.
  //  or a default value (which needs to be defined when the interval_map is instantiated) when no such interval exists.
  // The default value returned is zero.
  // The lower limit of the interval is included and the upper is excluded,
  // i.e. interval inclusion test is K1 <= K < K2

  lookup(K) {
    // conditions
    if (this.sortedMap.length) {
      this.sortedMap.filter((val, key) => {
        if (K >= key[0] && K < key[1]) {
          console.log(val);
        }
      });
    } else {
      console.log(this.default);
    }
  }
}

// A function for pairing keys, K1 and K2 which returns an array of paired keys(K);

function makePair(K1, K2) {
  return [K1, K2];
}

// create a new instance of an Interval_map(myMap) based on a constructor class 'IntervalMap'

const myMap = new IntervalMap();

// make an insertion ...by calling a function 'makePair' inside an 'insert' method which returns an array of paired keys

myMap.insert(makePair(1, 5), 3);
myMap.insert(makePair(6, 8), 9);
myMap.insert(makePair(12, 17), 10);

// my lookups

myMap.lookup(1);
myMap.lookup(7);
myMap.lookup(13);
