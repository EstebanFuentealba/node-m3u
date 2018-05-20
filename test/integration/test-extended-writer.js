var common = require("../common");
var assert = common.assert;
var fixture = common.helper.fixture;

var writer = common.m3u.extendedWriter();
writer.comment("I am a comment");
writer.file("foo.mp3");
writer.file("bar.mp3", 23);
writer.file("last.mp3", 10, "Artist - Title");
writer.file("last.mp3", 10, "Artist - Title", {
  "tvg-logo": "http://placehold.it/200x200",
  "group-title": "group A"
});
fixture.compare(writer, "extended_writer.m3u8");
