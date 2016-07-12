import * as angular from "angular"

class NgRedditApplication {
  public app;
  public bootstrap() {
    this.app = angular.module("ngreddit", [])
  }
}

export default new NgRedditApplication();