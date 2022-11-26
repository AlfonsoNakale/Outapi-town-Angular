import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'contact-us',
  templateUrl: 'contact-us.component.html',
  styleUrls: ['contact-us.component.css'],
})
export class ContactUs {
  rawpxzs: string = ' '
  raw13or: string = ' '
  rawmpyp: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Contact-us - Outapi-town')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Contact-us - Outapi-town',
      },
    ])
  }
}
