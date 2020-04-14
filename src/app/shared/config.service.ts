import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ConfigService {

  // Objects
  private result: any = {};
  private jobCode: String;
  private concepts: Object;

  constructor(private http: HttpClient) { }

  public load() {
    return new Promise((resolve, reject) => {
        this.http
        .get('config.json')
        .catch((error: any): any => {
            reject(false);
            return Observable.throw(error.json().error || 'Server error');
        })
        .subscribe((callResult) => {
          console.log('LOADING <<-- json file');
            this.result = callResult;
            this.jobCode = this.result.splice(0, 1)[0]['jobCode'];
            this.concepts = this.result;
            resolve(true);
        });
    });
  }

  public getJobCode() {
    console.log('READING -->> jobCode');
    return this.jobCode;
  }

  public getConcepts() {
    console.log('READING -->> concepts');
    return this.concepts;
  }
}
