const fs = require("fs");
const projectManagers = require("./ProjectManagers/script");

projectManagers.createProject("something", (data) => {
  for (var i in data) {
    if (i == process.argv[2]) {
      const inArgumentIndex = process.argv.indexOf("-in");
      var inArgumentContent = "__system_download__";
      if (inArgumentIndex != "-1") {
        inArgumentContent = process.argv[inArgumentIndex + 1];
      }

      fs.mkdirSync(inArgumentContent, {
        recursive: true
      });
      for (var item in data[i]) {
        if (item != "_") {
          fs.mkdirSync(`${inArgumentContent}/${item}`, {
            recursive: true
          });
        }
        for (let index = 0; index < data[i][item].length; index++) {
          var folder = item != "_" ? `${item}/` : ``;
          var text = "";
          try {
            if (process.argv[5] != "empty") {
              text = fs.readFileSync("./Templates/" + i + "/" + folder + data[i][item][index]).toString();
            }
          } catch (err) {
            text = "";
          }
          console.log("./Templates/" + i + "/" + folder + data[i][item][index])
          fs.writeFile(`${inArgumentContent}/${folder}${data[i][item][index]}`, text, function (err) {
            if (err) {
              return console.log(err);
            }
            console.log("The file was saved!");
          });
        }
      }
    }
  }
});