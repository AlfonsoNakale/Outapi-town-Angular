import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-services',
  templateUrl: 'services.component.html',
  styleUrls: ['services.component.css'],
})
export class Services {
  rawsc6k: string = ' '
  rawq0xq: string = ' '
  rawgpeh: string = ' '

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
