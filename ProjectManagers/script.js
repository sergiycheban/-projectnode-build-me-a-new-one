const fs = require("fs");

const skeletonsOfProjects = {
  simple_web_project: {
    _: ["index.html", "script.js", "style.css"]
  },
  bootstrap_web_project: {
    _: ["index.html"],
    style: ["style.css", ],
    scripts: ["script.js"]
  },
  complex_project: {
    _: ["index.html", "package-lock.json", "README.md"],
    style: ["styleButton.css", "styleFooter.css", "styleForm.css"],
    manager: ["BaseManager.js", "GameManager.js"],
    scripts: ["scriptMain.js", "scriptNotMain.js"]
  }
};


createProject = (handler, callback) => {
  callback(skeletonsOfProjects);
};

module.exports = {
  createProject
};