const is = {
    num: function(value) {
      return typeof value === 'number';
    },
    nan: function(value) {
      return Number.isNaN(value);
    },
    str: function(value) {
      return typeof value === 'string';
    },
    bool: function(value) {
      return typeof value === 'boolean';
    },
    undef: function(value) {
      return value === undefined;
    },
    def: function(value) {
      return value !== undefined;
    },
    arr: function(value) {
      return Array.isArray(value);
    },
    obj: function(value) {
      return value !== null && typeof value === 'object' && !Array.isArray(value);
    },
    fun: function(value) {
      return typeof value === 'function';
    },
    truthy: function(value) {
      return Boolean(value);
    },
    falsy: function(value) {
      return !value;
    }
  };
  