export class Member {
  public name: string;
  public description: string;
  public id: number;

  constructor(params: Object = {}) {
    // tslint:disable-next-line:forin
    for (const param in params) {
      this[param] = params[param];
    }

  }

}
