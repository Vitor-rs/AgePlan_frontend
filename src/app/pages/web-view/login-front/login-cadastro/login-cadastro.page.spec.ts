import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginCadastroPage } from './login-cadastro.page';

describe('LoginCadastroPage', () => {
  let component: LoginCadastroPage;
  let fixture: ComponentFixture<LoginCadastroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
