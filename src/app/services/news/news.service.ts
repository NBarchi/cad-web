import { Injectable } from '@angular/core';
import { 
  addDoc, 
  collection, 
  collectionData, 
  deleteDoc, 
  doc, 
  docData, 
  Firestore, 
  orderBy, 
  query, 
  setDoc 
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { News } from '../../types/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private firestore: Firestore) { }

  getNews(): Observable<News[]> {
    const newsRef = collection(this.firestore, 'news');
    const newsQuery = query(
        newsRef,
        orderBy('date', 'desc') 
    );
    return collectionData(newsQuery, { idField: 'id' }) as Observable<News[]>;
  }

  createNewsItem(news: News): Promise<any>{ 
    const newsRef = collection(this.firestore, 'news');
    const newsToSave = { ...news };

    newsToSave.date = new Date();

    if (newsToSave.id) {
        delete newsToSave.id;
    }

    return addDoc(newsRef, newsToSave);
  }

  getNewsById(id: string): Observable<News> {
    const newsRef = doc(this.firestore, `news/${id}`);
    return docData(newsRef, { idField: 'id' }) as Observable<News>;
  }

  deleteNewsItem(id: string) {
    const newsRef = doc(this.firestore, "news", id);
    return deleteDoc(newsRef);
  }

  updateNewsItem(news: News): Promise<any> {
    const newsRef = doc(this.firestore, "news", news.id as string);
    return setDoc(newsRef, news, { merge: true });
  }

}
