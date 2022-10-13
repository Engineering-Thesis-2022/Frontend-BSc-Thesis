import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpUserService } from '../../../secondary/services/user/http-user.service';
import {LoginResponse} from "../../../secondary/services/response/login.response";

@Component({
  selector: 'lib-login', templateUrl: './login.component.html', changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  readonly loginForm: FormGroup = new FormGroup({ username: new FormControl(), password: new FormControl() });
  private response: LoginResponse | undefined;

  constructor(private _httpUserService: HttpUserService, private _router: Router) {
  }

  onSumitedLogined(loginForm: FormGroup) {
    this._httpUserService.add({
      username: loginForm.get('username')?.value,
      password: loginForm.get('password')?.value,
    })
      .subscribe((res: any) => {
        if (res !== null) {
          this.response = res;
          console.log(res['roles']);

          localStorage.setItem('token', res['sessionId']);
          localStorage.setItem('roles', res['roles']);
          if (res['roles'].find((element: string) => element === 'ADMIN'))
            this._router.navigate(['admin']);
        } else {
          alert('Nie udało ci sie zalogować');
        }
      });
  }
}
