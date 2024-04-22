import {
  combineLatest,
  combineLatestAll,
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  merge,
  mergeMap,
  of,
  tap,
  withLatestFrom,
} from "rxjs";
import { ajax } from "rxjs/ajax";

console.log("Hi");

of(10, 20, 30).subscribe({
  next: (value) => console.log("next:", value),
  error: (err) => console.log("error:", err),
  complete: () => console.log("the end"),
});

const btn$ = fromEvent(document.getElementById("btn")!, "click").pipe(
  map(e => {
    return (document.getElementById("txt")as HTMLInputElement).value
  }),
);

const txt$ = fromEvent(document.getElementById("txt")!, "input").pipe(
  map((e) => (e.target as HTMLInputElement).value),
  filter((txt) => txt.length > 2),
  debounceTime(1000),
  distinctUntilChanged()
);

merge(btn$, txt$)
  .pipe(
    tap(console.log),
    mergeMap((text) =>
      ajax.getJSON<any[]>(
        `https://jsonplaceholder.typicode.com/users?q=${text}`
      )
    )
  )
  .subscribe(console.log);
  
// fromEvent(document.getElementById("txt")!, "input")
//   .pipe(
//     map((e) => (e.target as HTMLInputElement).value),
//     filter((txt) => txt.length > 3),
//     debounceTime(1000),
//     distinctUntilChanged(),
//     tap(console.log),
//     mergeMap((text) =>
//       ajax.getJSON<any[]>(
//         `https://jsonplaceholder.typicode.com/users?q=${text}`
//       )
//     )
//   )
//   .subscribe(console.log);
