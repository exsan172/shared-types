<h1>SHARED TYPES</h1>
<span>This project aims to share types, enums and others in typescript in the frontend and backend so that they are consistent and there is no repetition of defining them again on the frontend or other backend.<span>
<br/>

<h2>USING IN BACKEND (Initialization)</h2>
<span>First create your project folder, in project run this comand</span>
<br/>
<br/>

```
npx exsan172/shared-types-init
```

<h3>Now you can using types in project. and you can publish in github or gitlab to share with other backend or frontend (public or private). build your type first, before upload to git so that use in frontend or other backend.</h3>


```
import { Hono } from 'hono'
import { EnumUserRoles } from '../shared-types/src'
const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono! '+EnumUserRoles.ADMIN)
})

export default app
```

<h2>HOW TO PUBLISH YOUR TYPES</h2>
<span>To publish your types just like push repo git</span>
<br/>
<br/>

```
cd share-types

git init 

...
```

<h2>USING IN FRONTEND OR OTHER BACKEND</h2>

```
npm i github:exsan172/shared-types

-- OR YOUR OWN TYPES --

- GITHUB
npm i github:username/your-repository.git

- GITLAB
npm i git+https://gitlab.com/username/your-repository.git
```

<h3>Using in components or pages</h3>

```
import { EnumUserRoles } from "@exsan172/shared-types"

EnumUserRoles.ADMIN // works
```