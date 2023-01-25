import {Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  constructor(private db: Firestore) {}

  public getTickets(): Observable<any> {
    return collectionData(collection(this.db, 'tickets')).pipe(
      map((tickets) => {
        return tickets.map((ticket) => ({
          ...ticket,
          date: ticket['date'].toDate().toDateString(),
        }));
      })
    );
  }

  public addTicket(ticket: any): Observable<any> {
    return from(addDoc(collection(this.db, 'tickets'), ticket));
  }
}