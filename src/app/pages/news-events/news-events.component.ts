import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'news-events',
  templateUrl: 'news-events.component.html',
  styleUrls: ['news-events.component.css'],
})
export class NewsEvents {
  rawgjc9: string = ' '
  raw483g: string = ' '
  rawb8tm: string = ' '
  rawajw8: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('News-events - Outapi-town')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'News-events - Outapi-town',
      },
    ])
  }
}
