import { SafeHTMLPipe } from './safe-html.pipe';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { inject, TestBed } from '@angular/core/testing';


describe('SafeHTMLPipe', () => {
  let pipe: SafeHTMLPipe;
  let sanitized: DomSanitizer;


  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          BrowserModule
        ]
      });
    sanitized = TestBed.get(DomSanitizer);
    pipe = new SafeHTMLPipe(sanitized);
  });

  // it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
  //   pipe = new SafeHTMLPipe(domSanitizer);
  //   // tslint:disable-next-line:max-line-length
  //   const origString = '<th id=\"tbl34id0_1\" width=\"65%\" scope=\"col\" align=\"left\"><strong>Number of Rewards needed</strong></th>';
  //   console.log(typeof(origString));
  //   const z = pipe.transform(origString);
  //   console.log(typeof(z), z.changingThisBreaksApplicationSecurity);
  //   expect(pipe).toBeTruthy();
  //   expect(z.changingThisBreaksApplicationSecurity).toBeDefined();
  // }));

  it('should create instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should create instance', () => {
    const origString = '<th id=\"tbl34id0_1\" width=\"65%\" scope=\"col\" align=\"left\"><strong>Number of Rewards needed</strong></th>';
    console.log(typeof(origString));
    const transformedObject = pipe.transform(origString);
    console.log(typeof(transformedObject), transformedObject['changingThisBreaksApplicationSecurity']);
    expect(typeof(origString)).toBe('string');
    expect(transformedObject).toBeDefined();
    expect(typeof(transformedObject)).toBe('object');
    expect(transformedObject['changingThisBreaksApplicationSecurity']).toBeDefined();
  });

});
