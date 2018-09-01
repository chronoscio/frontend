import { Auth0DecodedHash, Auth0UserProfile } from 'auth0-js';
import { combineLatest } from 'rxjs/operators';
import { compose, mapPropsStream, withPropsOnChange } from 'recompose';
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

/**
 * Make localForage available in browser console for easier debug.
 */
if (process.env.NODE_ENV !== 'production') {
  interface WindowWithLocalForage extends Window {
    localForage: LocalForage;
  }

  (window as WindowWithLocalForage).localForage = localForage;
}

const localForage$ = from(localForage.ready()).pipe(
  // From localforage-observable:
  // Property '_isScalar' is missing in type 'Observable<LocalForageObservableChange>'
  // @ts-ignore TODO
  switchMap(() => localForage.getItemObservable('auth')),
  startWith(undefined)
);

export interface WithAuthProps {
  auth: Auth0DecodedHash;
  loggedInUser: Auth0UserProfile;
  isLoggedIn: boolean;
}

/**
 * Decorator which gives information about auth:
 * - auth: the decoded auth0 hash
 * - loggedInUser: the logged in user profile
 * - isLoggedIn: if the user is currently logged in
 */
export default compose<WithAuthProps, object>(
  mapPropsStream((props$: Observable<object>) =>
    props$.pipe(
      combineLatest(localForage$, (props, auth) => ({ ...props, auth }))
    )
  ),
  withPropsOnChange<{}, WithAuthProps>(['auth'], ({ auth }) => ({
    loggedInUser: auth && auth.idTokenPayload,
    isLoggedIn: !!auth
  }))
);
