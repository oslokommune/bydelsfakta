// IE11 polyfill for 'forEach' on nodelists
if ('NodeList' in window && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function(callback, thisArg) {
    thisArg = thisArg || window;
    for (let i = 0; i < this.length; i += 1) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

if (typeof SVGElement.prototype.blur === 'undefined') {
  SVGElement.prototype.blur = function() {};
}
