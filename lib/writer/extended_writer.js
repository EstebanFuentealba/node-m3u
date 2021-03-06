var oop = require("oop");
var Writer = require("../writer");

function ExtendedWriter(properties) {
  Writer.call(this);
}
oop.extend(ExtendedWriter, Writer);
module.exports = ExtendedWriter;

ExtendedWriter.prototype._info = function(duration = -1, title, attribs = {}) {
  if (title === undefined) {
    title = "";
  }
  let attributes = Object.keys(attribs)
    .map(key => ` ${key}="${attribs[key]}"`)
    .join("");

  this.comment(
    `EXTINF:${duration}${
      Object.keys(attribs).length > 0 ? `${attributes}` : ""
    },${title}`
  );
};

ExtendedWriter.prototype.file = function(uri, duration, title, attribs) {
  if (arguments.length > 1) {
    this._info(duration, title, attribs);
  }
  Writer.prototype.file.call(this, uri);
};

ExtendedWriter.prototype.toString = function() {
  return "#EXTM3U\n" + this._data;
};
