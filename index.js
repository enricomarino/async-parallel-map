/**
 * Map 'iterator' to each item in 'array' in parallel
 * and call 'callback' when done
 *
 * @param {Array} array array
 * @param {Function} iterator iterator
 * @param {Function} callback callback
 * @api public
 */
 
module.exports = function (array, iterator, callback) {
  var results = [];
  var completed = 0;
  var len = array.length;
  var i;

  function complete (err, result) {
    if (err) {
      callback(err);
      callback = function () {};
      return;
    }
    results[index] = result;
    completed += 1;
    if (completed === len) {
      callback(err, results);
      return;
    }
  }

  function iterate (value, index) {
    iterator(value, complete);
  }

  for (i = 0; i < len; i += 1) {
    iterate(array[i], i);
  }
};
