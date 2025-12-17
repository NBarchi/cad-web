import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { 
  addDoc,
  collection,
  collectionData, 
  deleteDoc, 
  doc, 
  Firestore 
} from '@angular/fire/firestore';
import { Prospect } from '../../types/prospect';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private firestore: Firestore) { }

  getProspects(): Observable<Prospect[]> {
    const prospectRef = collection(this.firestore, 'prospects');
    return collectionData(prospectRef, { idField: 'id' }) as Observable<Prospect[]>;
  }

  newProspect(prospect: Prospect): Promise<any>{
    const prospectRef = collection(this.firestore, 'prospects');
    return addDoc(prospectRef, prospect);
  }

  deletProspect(prospect: Prospect): Promise<any>{
    const docRef = doc(this.firestore, `prospects/${prospect.id}`);
    return deleteDoc(docRef);
  }

}
