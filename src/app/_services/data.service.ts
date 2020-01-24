import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Room } from '../_models/room';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  rooms$ = new BehaviorSubject<Room[]>([]);
  constructor(private http: HttpClient) { }

  getRooms() {
    return this.http.get(environment.host + '/room')
      .pipe(
        map(
          (data: any[]) => data.map(r => new Room(r.id, r.name, r.description, r.category_id, r.price))
        )
      );
  }
}
