
function main() {
  const fs = require("fs");
  const geofile = JSON.parse(fs.readFileSync( "../MapComponent/assets/trackssubds.geojson", "utf8"));
  const data = geofile["features"];
  const sortedData = data.sort((a, b) => {
    if (a.properties["SUBDI1NAME"] < b.properties["SUBDI1NAME"]) {
      return -1;
    }
    if (a.properties["SUBDI1NAME"] > b.properties["SUBDI1NAME"]) {
      return 1;
    }
    return 0;
  });

  geofile["features"] = sortedData;
  
  // write a new file
    fs.writeFile(
        "../MapComponent/assets/tracksubds_sorted.geojson",
        JSON.stringify(sortedData),
        function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }
    );

}
main();