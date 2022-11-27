import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'news-events',
  templateUrl: 'news-events.component.html',
  styleUrls: ['news-events.component.css'],
})
export class NewsEvents {
  raw7wnk: string = ' '
  rawcxui: string = ' '

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
