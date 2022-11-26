import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-services',
  templateUrl: 'services.component.html',
  styleUrls: ['services.component.css'],
})
export class Services {
  rawgcr9: string = ' '
  rawl0ro: string = ' '
  raw6jsy: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Services - Outapi-town')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Services - Outapi-town',
      },
    ])
  }
}
