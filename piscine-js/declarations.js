const escapeStr = "`, \\, /, \", '";

const arr = Object.freeze([4, '2']);

const obj = Object.freeze({
  str: 'Hello World!',
  num: 10,
  bool: true,
  undef: undefined,
  nested: Object.freeze({
    arr: Object.freeze([4, undefined, '2']),
    obj: Object.freeze({
      str: 'Nested string',
      num: 20,
      bool: false
    })
  })
});
