<h1>SHARED TYPES</h1>
<span>This project aims to share types, enums and others in typescript on the frontend and backend so that they are consistent and there is no repetition of defining them again on the frontend.<span>
<br/>
<br/>

```
/src/index.ts

export * from "./user";
```

<span>This file index.ts use for export any type, enum or other in other file.</span>
<br/>

<h2>RULE OF NAMING TYPE, ENUMS ‼️</h2>
<span>Please use these rules so that the frontend and backend are aligned, or use them with frontend and backend agreement in your own projects</span>
<br/>
<br/>

```
RequestData+{{ API_NAME }}
for : Body params data

Response+{{ API_NAME }}
for : Response structure api

RequestQuery+{{ API_NAME }}
for : Send query params in api

Enum+{{ API_NAME }}
for : Naming enum
```
<br/>

<h2>USING IN BACKEND</h2>
<span>First create your project folder, in project folder clone this repo and remove .git</span>
<br/>

```
git clone https://github.com/exsan172/shared-types.git

cd shared-types
rm -rf .git
```

<h3>Now you can using types in project, and you can publish in github or gitlab public or private</h3>

```
import { Hono } from 'hono'
import { EnumUserRoles } from '../shared-types/src'
const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono! '+EnumUserRoles.ADMIN)
})

export default app
```
<br/>

<h2>USING IN FRONTEND</h2>

```
npm i github:exsan172/shared-types

-- OR --

- GITHUB (PUBLIC)
npm i github:username/your-repository.git

- GITHUB (PRIVATE)
You must login github in your terminal first and you can install repository (make sure the repository is shared with you)

- GITLAB (PUBLIC)
npm i git+https://gitlab.com/username/your-repository.git

- GITLAB (PRIVATE)
You must login gitlab in your terminal first and you can install repository (make sure the repository is shared with you)

```

<h3>Using in components or pages</h3>

```
import { EnumUserRoles } from "@exsan172/shared-types"

EnumUserRoles.ADMIN // works
```