import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-procurement',
  templateUrl: 'procurement.component.html',
  styleUrls: ['procurement.component.css'],
})
export class Procurement {
  rawpot7: string = ' '
  rawn3xo: string = ' '
  rawnukl: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Procurement - Outapi-town')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Procurement - Outapi-town',
      },
    ])
  }
}
