System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.5",
    "angular-material": "github:angular/bower-material@1.1.0-rc4",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.18",
    "change-case": "npm:change-case@2.3.1",
    "css": "github:systemjs/plugin-css@0.1.21",
    "lodash": "npm:lodash@4.12.0",
    "rx": "npm:rx@4.1.0",
    "github:angular-ui/ui-router@0.2.18": {
      "angular": "github:angular/bower-angular@1.5.5"
    },
    "github:angular/bower-angular-animate@1.5.5": {
      "angular": "github:angular/bower-angular@1.5.5"
    },
    "github:angular/bower-angular-aria@1.5.5": {
      "angular": "github:angular/bower-angular@1.5.5"
    },
    "github:angular/bower-angular-messages@1.5.5": {
      "angular": "github:angular/bower-angular@1.5.5"
    },
    "github:angular/bower-material@1.1.0-rc4": {
      "angular": "github:angular/bower-angular@1.5.5",
      "angular-animate": "github:angular/bower-angular-animate@1.5.5",
      "angular-aria": "github:angular/bower-angular-aria@1.5.5",
      "angular-messages": "github:angular/bower-angular-messages@1.5.5",
      "css": "github:systemjs/plugin-css@0.1.21"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:camel-case@1.2.2": {
      "sentence-case": "npm:sentence-case@1.1.3",
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:change-case@2.3.1": {
      "camel-case": "npm:camel-case@1.2.2",
      "constant-case": "npm:constant-case@1.1.2",
      "dot-case": "npm:dot-case@1.1.2",
      "is-lower-case": "npm:is-lower-case@1.1.3",
      "is-upper-case": "npm:is-upper-case@1.1.2",
      "lower-case": "npm:lower-case@1.1.3",
      "lower-case-first": "npm:lower-case-first@1.0.2",
      "param-case": "npm:param-case@1.1.2",
      "pascal-case": "npm:pascal-case@1.1.2",
      "path-case": "npm:path-case@1.1.2",
      "sentence-case": "npm:sentence-case@1.1.3",
      "snake-case": "npm:snake-case@1.1.2",
      "swap-case": "npm:swap-case@1.1.2",
      "title-case": "npm:title-case@1.1.2",
      "upper-case": "npm:upper-case@1.1.3",
      "upper-case-first": "npm:upper-case-first@1.1.2"
    },
    "npm:constant-case@1.1.2": {
      "snake-case": "npm:snake-case@1.1.2",
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:dot-case@1.1.2": {
      "sentence-case": "npm:sentence-case@1.1.3"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:is-lower-case@1.1.3": {
      "lower-case": "npm:lower-case@1.1.3"
    },
    "npm:is-upper-case@1.1.2": {
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:lodash@4.12.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lower-case-first@1.0.2": {
      "lower-case": "npm:lower-case@1.1.3"
    },
    "npm:param-case@1.1.2": {
      "sentence-case": "npm:sentence-case@1.1.3"
    },
    "npm:pascal-case@1.1.2": {
      "camel-case": "npm:camel-case@1.2.2",
      "upper-case-first": "npm:upper-case-first@1.1.2"
    },
    "npm:path-case@1.1.2": {
      "sentence-case": "npm:sentence-case@1.1.3"
    },
    "npm:process@0.11.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:rx@4.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sentence-case@1.1.3": {
      "lower-case": "npm:lower-case@1.1.3"
    },
    "npm:snake-case@1.1.2": {
      "sentence-case": "npm:sentence-case@1.1.3"
    },
    "npm:swap-case@1.1.2": {
      "lower-case": "npm:lower-case@1.1.3",
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:title-case@1.1.2": {
      "sentence-case": "npm:sentence-case@1.1.3",
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:upper-case-first@1.1.2": {
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
