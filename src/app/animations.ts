import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';

export const transitionAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ]),
      query(':enter', [
        style({ left: '-100%' }),
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' })),
        ]),
        query(':enter', [
          animate('200ms ease-out', style({ left: '0%' })),
        ]),
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ]),
      query(':enter', [
        style({ left: '-100%' }),
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' })),
        ]),
        query(':enter', [
          animate('200ms ease-out', style({ left: '0%' })),
        ]),
      ]),
      query(':enter', animateChild()),
    ]),
  ]);

