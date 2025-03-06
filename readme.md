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
Data+{{ API_NAME }}
for : Body params data

Response+{{ API_NAME }}
for : Response structure api

RequestQuery+{{ API_NAME }}
for : Send query params in api

Enum+{{ API_NAME }}
for : Naming enum
```