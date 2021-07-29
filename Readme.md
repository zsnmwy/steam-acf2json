# Steam Acf To Json

## Function

- decode(acfString)

```js
const acfParser = require('steam-acf2json')
const fs = require('fs')

const testFile = fs.readFileSync('appworkshop_322330.acf', 'utf-8')
const decode = acfParser.decode(testFile)

console.log(JSON.stringify(decode, null, 2))
```

- encode(obj)

```js
fs.writeFileSync('test.acf', acfParser.encode(decode))
```

```bash
$ md5 appworkshop_322330.acf    
MD5 (appworkshop_322330.acf) = 6b8ef4994155e102b7f7c92361d34457

$ md5 test.acf              
MD5 (test.acf) = 6b8ef4994155e102b7f7c92361d34457
```
