import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) {}

  getCourses() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(), //obtem a primeira resposta do servidor e finaliza a inscrição no end-point
      delay(1000),
      tap((courses) => console.log(courses))
    );
  }

  save(record: Course) {
    return this.httpClient.post<Course>(this.API, record);
  }
}
