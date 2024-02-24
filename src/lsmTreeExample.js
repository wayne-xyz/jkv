class LSMTree {
    constructor() {
      this.memory = {}; // In-memory store for fast writes
      this.disk = {}; // Disk store for persistent storage
      this.threshold = 3; // Threshold for triggering flush to disk
    }
  
    // Insert a key-value pair into the LSM-tree
    insert(key, value) {
      this.memory[key] = value;
      if (Object.keys(this.memory).length >= this.threshold) {
        this.flushToDisk();
      }
    }
  
    // Flush in-memory data to disk
    flushToDisk() {
      // Merge memory data with disk data
      this.disk = { ...this.disk, ...this.memory };
      // Clear memory
      this.memory = {};
    }
  
    // Get the value associated with a key
    get(key) {
      // First, check in-memory store
      if (key in this.memory) {
        return this.memory[key];
      }
      // Next, check disk store
      if (key in this.disk) {
        return this.disk[key];
      }
      // Key not found
      return null;
    }
  }
  
  // Example usage
  const lsm = new LSMTree();
  lsm.insert('key1', 'value1');
  lsm.insert('key2', 'value2');
  lsm.insert('key3', 'value3');
  
  console.log(lsm.get('key2')); // Output: value2