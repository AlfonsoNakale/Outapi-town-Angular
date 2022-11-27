import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class Login {
  raw6wgi: string = ' '
  rawywgt: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Login - Outapi-town')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Login - Outapi-town',
      },
    ])
  }
}
