import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/service/event.service';
import { Observable, switchMap } from 'rxjs';
import { Event } from 'src/app/model/event';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  event$: Observable<Event> = this.activatedRoute.params.pipe(
    switchMap(params => this.eventService.get(params['id']))
  )

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(event: Event): void {
    this.eventService.update(event);
  }

}
