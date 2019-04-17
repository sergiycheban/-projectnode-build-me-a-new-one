const fs = require("fs");

const skeletonsOfProjects = {
  simple_web_project: {
    _: ["index.html", "script.js", "style.css"]
  },
  bootstrap_web_project: {
    _: ["index.html"],
    style: ["style.css", ],
    scripts: ["script.js"]
  }
};

createSimpleWebProject = (handler, callback) => {
  callback(skeletonsOfProjects);
};

createBootstrapProject = (handler, callback) => {
  callback(skeletonsOfProjects);
};

module.exports = {
  createSimpleWebProject,
  createBootstrapProject
};