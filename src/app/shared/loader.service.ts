import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PlatformLocation } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';

@Injectable()
export class LoaderService {
  result;
  jsData;
  htmlData;
  baseHref;

  constructor(private http: Http, private platformLocation: PlatformLocation) {
    this.baseHref = (this.platformLocation as any).location.origin + (platformLocation as any).getBaseHrefFromDOM();
  }

  public jsLoad(url, baseUrl): Observable<any> {
    return this.http.get(url)
      .map((js: any) => {
        this.jsData = js.text();
        // creating the TL
        this.jsData = this.jsData.replace(/window\.onload=function\(\){/g, '');
        this.jsData = this.jsData.replace(/window\.onload = function\(\) {/g, '');
        this.jsData = this.jsData.replace (
          /^/,
          '// Timeline Definition\n\n' +
          'var tl = new TimelineLite({onUpdate: updateData});\n' +
          'function updateData() {' +
          '  time = tl.time().toFixed(1);' +
          '  progress = tl.progress();' +
          '  parent.updateData(time, progress);\n' +
          '}'
          );
        this.jsData = this.jsData.replace(/TweenLite/g, 'tl');
        this.jsData = this.jsData.replace(/\/\/end/g, '');
        this.jsData = this.jsData.replace(/\}(?=[^}]*$)/g, '');
        // for Canvas
        this.jsData = this.jsData.replace(/.src = \'img/g, '.src = \'' + this.baseHref + baseUrl + 'img');
        console.log('JS Loaded...');
        return this.jsData;
      });
  }

  public htmlLoad(url, gsUrl, baseUrl, size, jsData): Observable<any> {
    return this.http.get(url)
      .map((html: any) => {
        this.htmlData = html.text();
        // creating the iframe
        this.htmlData = this.htmlData.replace(
          '</head>',
          '<script type="text/javascript" src="' + gsUrl + 'TimelineLite.min.js"></script></head>'
          );
        this.htmlData = this.htmlData.replace('css/' + size + '.css', this.baseHref + '/' + baseUrl + 'css/' + size + '.css');
        this.htmlData = this.htmlData.replace('src="js/' + size + '.js"', '');
        this.htmlData = this.htmlData.replace(/src="js\/TweenLite.min.js/g, 'src="' + gsUrl + 'TweenLite.min.js');
        this.htmlData = this.htmlData.replace(/src="js\/CSSPlugin.min.js/g, 'src="' + gsUrl + 'plugins/CSSPlugin.min.js');
        this.htmlData = this.htmlData.replace(/src="js\/EasePack.min.js/g, 'src="' + gsUrl + 'easing/EasePack.min.js');
        this.htmlData = this.htmlData.replace(/src="js\//g, 'src="' + this.baseHref + '/' + baseUrl + 'js/');
        this.htmlData = this.htmlData.replace(/img src="/g, 'img src="' + this.baseHref + '/' + baseUrl);
        this.htmlData = this.htmlData.replace('</body>', '<script type="text/javascript">' + jsData + '</script></body>');
        console.log('HTML/CSS Loaded...');
        return this.htmlData;
      });
  }
}
