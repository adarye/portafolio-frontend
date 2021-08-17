import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  label: string = ''
  constructor(public router: Router, public title: Title,
    public meta: Meta) {
    this.getDataRoute().subscribe((data) => {
      this.label = data.title;
      this.title.setTitle(this.label)
      let metaTag: MetaDefinition = {
        name: 'description',
        content: this.label
      }
      this.meta.updateTag(metaTag)
    });
  }
  getDataRoute() {
    return this.router.events
      .pipe(filter((event) => event instanceof ActivationEnd))
      .pipe(filter((event: ActivationEnd) => event.snapshot.firstChild === null)).pipe
      (map((event: ActivationEnd) => event.snapshot.data));
  }
  ngOnInit(): void {
  }

}
