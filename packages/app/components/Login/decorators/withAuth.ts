import { combineLatest } from 'rxjs/operators';
import { compose, mapPropsStream, withProps } from 'recompose';
import { from, Observable } from 'rxjs';
import * as localForage from 'localforage';
import { setObservableConfig } from 'recompose';
import { startWith, switchMap } from 'rxjs/operators';
import 'localforage-observable';

// Set recompose to use RxJS
// https://github.com/acdlite/recompose/blob/master/docs/API.md#setobservableconfig
setObservableConfig({
  // Converts a plain ES observable to an RxJS 5 observable
  fromESObservable: from
});

// Use RxJS as Observable in localforage-observable
// https://github.com/localForage/localForage-observable#using-a-different-observable-library
localForage.newObservable.factory = subscribeFn =>
  Observable.create(subscribeFn);

const localForage$ = from(localForage.ready()).pipe(
  // From localforage-observable:
  // Property '_isScalar' is missing in type 'Observable<LocalForageObservableChange>'
  // @ts-ignore TODO
  switchMap(() => localForage.getItemObservable('auth')),
  startWith(undefined)
);

/**
 * Decorator which gives information about auth:
 * - auth.accessToken: access token for our backend
 * - isLoggedIn
 */
export default compose(
  mapPropsStream((props$: Observable<any>) =>
    props$.pipe(
      combineLatest(localForage$, (props, auth) => ({ ...props, auth }))
    )
  ),
  withProps(({ auth }) => ({ isLoggedIn: !!auth }))
);
