class KeyValue {
    constructor(key, value) {
      this.key = key;
      this.value = value;
    }
  }
  
  // all the api similar with the pouchdb: db.function(,[callback])
  class MiniBase {
    constructor() {
      // Initialization if needed
    }
  
    put(key, value) {
      // Implementation for putting key-value pair
      throw new Error('Method not implemented');
    }
  
    get(key) {
      // Implementation for getting value by key
      throw new Error('Method not implemented');
    }
  
    delete(key) {
      // Implementation for deleting key-value pair
      throw new Error('Method not implemented');
    }
  
    scan(startKey = [], stopKey = []) {
      // Implementation for scanning key-value pairs in a range
      throw new Error('Method not implemented');
    }
  
    async *scanAsync(startKey = [], stopKey = []) {
      // Async iterator for scanning key-value pairs in a range
      throw new Error('Method not implemented');
    }
    
    async *scanAllAsync() {
      // Async iterator for scanning all key-value pairs
      throw new Error('Method not implemented');
    }
  
    async flush(iter) {
      // Implementation for flushing data
      throw new Error('Method not implemented');
    }
  
    async compact() {
      // Implementation for compacting data
      throw new Error('Method not implemented');
    }
  }