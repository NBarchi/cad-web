import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { News } from '../../types/news';
import { map, Observable } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NewsService } from '../../services/news/news.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  imports: [CommonModule, RouterLink],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  news$: Observable<News> | undefined;

  safeContent$: Observable<SafeHtml> | undefined;

  constructor(private route: ActivatedRoute, private newsService: NewsService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const newsId = params.get('id');
      if (newsId) {
        this.news$ = this.newsService.getNewsById(newsId);

        this.safeContent$ = this.news$.pipe(
          map(n => this.sanitizer.bypassSecurityTrustHtml(n.content || ''))
        );
      }
    })
  }

}
