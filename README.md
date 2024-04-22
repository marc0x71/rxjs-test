# Prove RxJS

## Preparazione
Inizializzazione ```npm```
```bash
mkdir rxjs-test && cd rxjs-test
npm init --yes
npm i -D typescript ts-node parcel
npm i rxjs
```
Creare un file ```index.html``` come segue
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RxJS - Test</title>
</head>
    <h1>RxJS - Test</h1>
    <input type="text" id="txt">
    <button id="btn">Click me!</button>
</body>
<script type="module" src="index.ts"></script>
</html>
```
Creare un file ```index.ts```
```ts
import { of } from 'rxjs';

of(1,2,3,4).subscribe(console.log);
```
Aggiungere in ```package.json``` 
```json
{
  "type": "module",
  "scripts": {
    "serve": "parcel index.html"
  },
}
```

## Avvio
```bash
npm run serve
```