import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { News } from '../../types/news';
import { NewsService } from '../../services/news/news.service';

@Component({
  selector: 'app-landing',
  imports: [ RouterLink, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  feauturedNews: News | null = null;

  olderNews: News[] = [];
  
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getNews();
  }
  
 getNews(){
  this.newsService.getNews().subscribe(data => {
      if (data.length > 0) {
        this.feauturedNews = data[0];      
        this.olderNews = data.slice(1);    
      }
    });
 }
  
}

