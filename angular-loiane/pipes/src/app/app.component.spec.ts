import { TestBed, async } from '@angular/core/testing';
<<<<<<< HEAD
import { AppComponent } from './app.component';
=======

import { AppComponent } from './app.component';

>>>>>>> 352f0231bca11c0db0e37ff0e24595509647438b
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
<<<<<<< HEAD
=======

>>>>>>> 352f0231bca11c0db0e37ff0e24595509647438b
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
<<<<<<< HEAD
=======

>>>>>>> 352f0231bca11c0db0e37ff0e24595509647438b
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
<<<<<<< HEAD
=======

>>>>>>> 352f0231bca11c0db0e37ff0e24595509647438b
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});