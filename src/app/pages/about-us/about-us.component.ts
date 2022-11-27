import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'about-us',
  templateUrl: 'about-us.component.html',
  styleUrls: ['about-us.component.css'],
})
export class AboutUs {
  rawpl0y: string = ' '
  rawyop6: string = ' '
  rawjvzg: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('About-us - Outapi-town')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'About-us - Outapi-town',
      },
    ])
  }
}
