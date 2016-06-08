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
    link?: (scope: any, elem: any, attrs: any) => void;
    controller?: Function;

    controllerAs?: string;
    templateUrl?: string;
  }
  
  interface IDirective {
    (): IDirectiveObj;
    dirName: string;
    route: any[] | Function;
  }
  
  interface IService {
    (): any;
    serviceName: string;
  }
}
