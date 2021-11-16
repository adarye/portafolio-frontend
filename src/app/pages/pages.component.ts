import { Component, OnInit, ViewEncapsulation } from '@angular/core';



//import '../../assets/plugin-cv/js/jquery-2.1.3.min';
// import '../../assets/plugin-cv/js/modernizr.custom.js'

import '../../assets/plugin-cv/js/animating.js';

//import '../../assets/plugin-cv/js/imagesloaded.pkgd.min.js';
//import '../../assets/plugin-cv/js/masonry.pkgd.min';
//import '../../assets/plugin-cv/js/owl.carousel.min.js';
//import '../../assets/plugin-cv/js/jquery.magnific-popup.min.js';

import '../../assets/plugin-cv/js/main';

// declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // init_plugins();
  }

}
