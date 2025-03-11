<h1>SHARED TYPES</h1>
<span>This project aims to share types, enums and others in typescript in the frontend and backend so that they are consistent and there is no repetition of defining them again on the frontend or other backend.<span>
<br/>
<h3>Step 1 - run this comand, and publish to your git</h3>

```
npx github:exsan172/shared-types-init
```

<span>After run comand, you will see folder call `shared-types`</span>

```
  shared-types
    - src
      - index.ts
      - user.ts
    ...
```

<span>After publish to your git, now you can install in backend and frontend.</span>
<br/>
<br/>

<h3>Step 2 - in root project folder, add submodule</h3>

```
git submodule add your-repo.git
```

<span>And you can use in backend :</span>

```
import { Hono } from 'hono'
import { EnumUserRoles } from '../shared-types/src'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono '+EnumUserRoles.ADMIN+" !")
})

export default app
```
<span>Import to your project</span>

```
import { Hono } from 'hono'
import { EnumUserRoles } from '@exsan172/shared-types'

#or direcly call folder ./src/types
#import { EnumUserRoles } from './src/types'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono! '+EnumUserRoles.ADMIN)
})

export default app
```

<span>New clone, if shared-types not instaled yet.</span>

```
git submodule update --init --recursive

- or if already shared-types intaled -

git pull origin main
```

<br/>
<h3>Step 3 - publish types</h3>

```
  cd shared-types

  - Build first
  npm run build

  - Publish
  git add .
  git commit -m "update shared-types"
  git push origin main
```

<h3>Step 4 - using in other client</h3>

```
npm i github:username/your-repo

import { EnumUserRoles } from "@exsan172/shared-types"
EnumUserRoles.ADMIN
```
<h2>Tip :</h2>
<span>If you want to update types but when you run npm i ... it doesn't update. delete `@exsan172/shared-types` in package.json, and add #last_commit when running npm i ... for example:<span>
<br/>
<br/>

```
- GITHUB
npm i github:username/your-repository.git#1dec5be8

- GITLAB
npm i git+https://gitlab.com/username/your-repository.git#1dec5be8
```
