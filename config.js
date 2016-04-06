System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.3",
    "angular-material": "github:angular/bower-material@1.0.7",
    "css": "github:systemjs/plugin-css@0.1.20",
    "github:angular/bower-angular-animate@1.5.3": {
      "angular": "github:angular/bower-angular@1.5.3"
    },
    "github:angular/bower-angular-aria@1.5.3": {
      "angular": "github:angular/bower-angular@1.5.3"
    },
    "github:angular/bower-material@1.0.7": {
      "angular": "github:angular/bower-angular@1.5.3",
      "angular-animate": "github:angular/bower-angular-animate@1.5.3",
      "angular-aria": "github:angular/bower-angular-aria@1.5.3",
      "css": "github:systemjs/plugin-css@0.1.20"
    }
  }
});
