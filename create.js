const fs = require("fs");
const projectManagers = require("./ProjectManagers/script");

projectManagers.createBootstrapProject("something", (data) => {
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
      for (var r in data[i]) {
        if (r != "_") {
          fs.mkdirSync(`${inArgumentContent}/${r}`, {
            recursive: true
          });
        }
        for (let index = 0; index < data[i][r].length; index++) {
          var folder = r != "_" ? `${r}/` : ``;
          var text = fs.readFileSync("./Templates/" + i + "/" + folder + data[i][r][index]).toString();
          console.log("./Templates/" + i + "/" + folder + data[i][r][index])
          fs.writeFile(`${inArgumentContent}/${folder}${data[i][r][index]}`, text, function (err) {
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