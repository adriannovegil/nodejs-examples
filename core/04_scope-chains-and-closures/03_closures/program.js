function foo() {
  var bar;
  quux = 3;
  function zip() {
    var quux = 5;
    bar = true;
  }
  return zip;
}
