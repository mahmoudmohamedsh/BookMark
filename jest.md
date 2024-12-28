
### Test
```bash
$ yarn add supertest jest ts-jest @types/jest @types/supertest -D

$ yarn ts-jest config:init 
```
## add this to the file this command create 
------------------------
```ts
{
testMatch:["**/**/*.test.ts"],
verbose: true,
forceExit:true,
clearMocks:true,
}
```
----------------------------
#### create folder call it "__test__" and inside create "product.test.ts" file
```ts
describe('product',()=>{
    describe('get product route' , ()=>{
        describe('given the product does not exist ',()=>{
            it('should return a 404',()=>{
                expect(true).toBe(true);
            })
        })
    })
})

```
#### add inside package.json the command for run test
```json
{"scripts":{"test": "jest"}}
```
#### inside your terminal run it 
```bash
$ yarn test
```
#### for keep watch the file and recompile when edit
```bash
$ yarn test --watchAll

$ yarn test --detectOpenHandles
```

---------------------
#### go to app file export the app to get access to it iside the test file  
```js
import express from "express"
function createServer(){
    const app = express();

    app.use(express.json())

    app.use(deserializeUser) // custom middleware 
    
    routes(app)

    return app
}

export default createServer;
```

```js
import 

const app = createServer()

app.listen(port , async ()=>{
    await dbConnect();
    logger.info('db connected')
})
```
#### back to the file 
```ts
import supertest from 'supertest';
import createserver from '../createserver.ts';

const app = createServer();

describe('product',()=>{
    describe('get product route' , ()=>{
        describe('given the product does not exist ',()=>{
            it('should return a 404',async ()=>{
                const productId = 'product-123';

                await supertest().get(`/api/product/${productId}`).expect(404);
            })
        })
    })
})

```