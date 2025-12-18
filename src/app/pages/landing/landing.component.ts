import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { News } from '../../types/news';
import { NewsService } from '../../services/news/news.service';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-landing',
  imports: [ RouterLink, CommonModule, AnimateOnScrollDirective],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  @ViewChild('video', { static: true })
  video!: ElementRef<HTMLVideoElement>;

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

 ngAfterViewInit() {
    const vid = this.video.nativeElement;

    // Chrome necesita esto explícitamente
    vid.muted = true;
    vid.autoplay = true;
    vid.playsInline = true;

    // Delay pequeño para Chrome
    setTimeout(() => {
      vid.play().catch(err => {
        console.warn('Chrome bloqueó autoplay:', err);
      });
    }, 100);
  }


  
}

