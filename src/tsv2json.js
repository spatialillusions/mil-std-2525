export default function csv2json(str) {
  var e, et;
  str = str.replace(/\r/g, "");
  var arr = str.split("\n");
  var header = arr[0].split("\t");
  var names = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] == "") {
      arr.splice(i, 1);
      i--;
      continue;
    }
    var values = arr[i].split("\t");
    arr[i] = {};
    for (var j = 0; j < header.length; j++) {
      if (j <= values.length) {
        arr[i][header[j]] = values[j];
      }
      // For letter based standards
      if (arr[i].hasOwnProperty("hierarchy")) {
        var h = arr[i].hierarchy.split(".");
        names[h.length - 1] = arr[i].name;
        arr[i].names = names.slice(0, h.length);
      }
      // For number based standards
      if (arr[i]["Entity"]) {
        e = arr[i]["Entity"];
        et = "";
      }
      if (arr[i]["Entity Type"]) {
        arr[i]["Entity"] = e;
        et = arr[i]["Entity Type"];
      }
      if (arr[i]["Entity Subtype"]) {
        arr[i]["Entity"] = e;
        arr[i]["Entity Type"] = et;
      }
    }
  }
  arr.shift();
  return arr;
}
