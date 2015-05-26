
var ready = function(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
};

if (typeof window.addEventListener !== "function" && typeof document.attachEvent === "function") {
    window.addEventListener = function (eventName, handler) {
        document.attachEvent("on" + eventName, handler);
    };
}
if (typeof window.removeEventListener !== "function" && typeof document.detachEvent === "function") {
    window.removeEventListener = function (eventName, handler) {
        document.detachEvent("on" + eventName, handler);
    };
}