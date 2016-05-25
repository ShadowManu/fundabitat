declare module 'angular-extras' {
  
  interface IRouteConfigObj {
    name: string;
    url?: string;
    template?: string;
    abstract?: boolean;
  }
  
  interface IDirectiveObj {
    restrict?: string;
    transclude?: boolean;
    scope?: any;
    bindToController?: any;

    require?: string | string[];
    link?: () => void;
    controller?: Function;

    controllerAs?: string;
    templateUrl: string;
  }
  
  interface IDirective {
    (): IDirectiveObj;
    name: string;
    route: any[] | Function;
  }
}
