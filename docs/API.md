# API reference of :

A registry to use third party libraries with the Pigalle framework.

---
&#x1F34E; **__Warning !__ Work in progress...**
---
## API

<a name="module_thirdparties-registry"></a>

### thirdparties-registry
A registry to store third party libraries then use them in a Pigalle application.

**Example**  
```js
const {ThirdPartiesRegistry} = require('@pigalle/registries.thirdparties')
const {ThirdPartyPlugin} = require('@pigalle/plugins.thirdparty')

// Create a new registry to store third parties.
const registry = ThirdPartiesRegistry.factory()

// Add express.js to the registry
registry.set(ThirdPartyPlugin.factory('express'))

// Add restify to the registry
registry.set('http-backend', ThirdPartyPlugin.factory('restify'))

// Another way to add restify to registry
registry.set('restify')

// Another way ;-)
registry.set('http-backend', 'restify')
```
## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 [SAS 9 Février](https://9fevrier.com/)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>

***

_Documentation generated on Mon, 26 Feb 2018 09:37:39 GMT_

**Copyright &copy; 2018 [SAS 9 Février](https://9fevrier.com/)**
