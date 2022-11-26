import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-page',
  templateUrl: 'landing-page.component.html',
  styleUrls: ['landing-page.component.css'],
})
export class LandingPage {
  rawicfj: string = ' '
  raw42kn: string = ' '
  rawkf2k: string = ' '
  rawt0kf: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Outapi-town')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Outapi-town',
      },
    ])
  }
}
