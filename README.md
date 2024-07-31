# vite-react-template

React 개발을 위한 나만의 Vite+React 커스텀 템플릿!

- .gitignore 작성
- .npmrc 파일 생성
- Vite 패키지 설치 및 명령어 인터페이스 구성
- React 패키지 설치 및 타입선언 패키지 설치
- Vite 플러그인구성
- ESLint 설치 및 초기구성 + 플러그인 구성
- 절대경로 설정

---

### Step By Step 따라하고 싶다면?

🛠 자동이 아닌 직접 Vite + React 스캐폴딩 해보자!

⏬
⏬
⏬

## 새로운 Git Repo 생성하기

1. 로컬(파인더)에서 새로운 폴더 생성하고
2. 깃 허브에도 같은 이름으로 레포지토리 생성해서
3. 깃 연결하기

   ```bash
   echo "# vite-react-template" >> README.md
   git init
   git add README.md
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/hammadam/vite-react-template.git
   git push -u origin main
   ```

4. .gitignore 파일 만들기

   - 파일위치 : vite-react-templat (최상위)
   - 파일명 : .gitignore
   - 파일내용

     ```jsx
     .DS-Store

     node_modules
     build
     dist
     ```

     맥에서 생성되는 .DS-Store 라는 파일과
     node_modules 폴더,
     build 파일,
     build 된 결과로 생성된 dist 폴더
     이렇게 4가지는 깃에 올리지마라! 는 뜻

5. .npmrc 파일 만들기

   - 파일위치 : vite-react-templat (최상위)
   - 파일명 : .npmrc
   - 파일내용

     ```jsx
     # 참고: https://docs.npmjs.com/cli/v8/using-npm/config

     package-lock=true
     save-exact=true
     yes=true

     init-license=MIT
     init-version=0.0.1
     ```

---

# Vite 설치하기 (pnpm)

1. 매뉴얼대로 설치하기 ([참고링크](https://ko.vitejs.dev/guide/#manual-installation))

   ```bash
   //pnpm을 사용할 경우
   pnpm add vite -D # --save-dev

   //npm을 사용할 경우
   npm install -D vite
   ```

   그럼 아래 3가지가 생성된걸 확인할 수 있음

   - (폴더) node_modules
   - (파일) package.json
   - (파일) pnpm-lock.yaml

---

# package.json 작성

1. package.json 파일 열어보기

   ```jsx
   {
   	"devDependencies": {
   		"vite": "5.3.5"
   	}
   }
   ```

2. 위 내용(vite)만 들어가있는 것을 확인하고 내용 추가하기

   ```jsx
   {
   	"type":"module",
   	"private":true,
   	"name":"vite-react-template",
   	"version":"0.0.1",
   	"discription":"Vite 커스텀 템플릿을 사용해 React 프로젝트를 오토 스캐폴딩",
   	"devDependencies": {
   		"vite": "5.3.5"
   	}
   }
   ```

   추가된 내용의 뜻

   - `"type":"module"`
     - 우리가 여기서 사용하는 js 파일은 es 모듈을 쓸거다.
     - 왜? vite는 es모듈을 사용해서 번들링을 수행하기 때문
   - `"private":true`
     - 외부에 공개할 필요가 없다. 공개 안하겠다!

---

# index.html 파일 생성

1. index.html 파일 만들기

   - 파일위치 : vite-react-templat (최상위)
   - 파일명 : index.html
   - 파일내용

     ```html
     <!DOCTYPE html>
     <html lang="ko-KR">
       <head>
         <meta charset="UTF-8" />
         <title>Vite + React 커스텀 템플릿</title>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" type="image/svg+xml" href="/viteReact.svg" />
       </head>

       <body>
         <noscript>이 앱을 사용하려면 JavaScript 활성화가 필요합니다.</noscript>
         <div id="react-app"></div>
       </body>
     </html>
     ```

---

# Vite 명령어 인터페이스

1. 먼저 vite가 잘 깔려있는지 확인

   ```bash
   ls
   pnpm ls vite
   ```

2. vite 구동해보기

   ```bash
   pnpm vite
   ```

3. package.json 에 명령어 인터페이스 구성하기

   - 추가하는 코드
     ```jsx
     "scripts": {
     		"dev": "vite",
     		"build": "vite build",
     		"preview": "vite preview"
     	},
     ```
   - 전체코드는 이렇게... (전체 붙여넣기하기)
     ```jsx
     {
     	"type":"module",
     	"private":true,
     	"name":"vite-react-template",
     	"version":"0.0.1",
     	"discription":"Vite 커스텀 템플릿을 사용해 React 프로젝트를 오토 스캐폴딩",
     	"scripts": {
     		"dev": "vite",
     		"build": "vite build",
     		"preview": "vite preview"
     	},
     	"devDependencies": {
     		"vite": "5.3.5"
     	}
     }
     ```

---

# React 패키지 설치하기

1. React와 React-dom 둘다 설치 (둘다 버전이 같아야 함)

   ```bash
   pnpm add react react-dom
   ```

   - devDependencies가 아니라 종속성(dependencies)으로 설치한 것!
   - package.json 에서 추가된 걸 확인 가능

2. index.html 파일에서 스크립트 불러오기

   - 아래 코드를 <head></head> 안에 넣고
     ```html
     <script type="module" src="src/main.jsx"></script>
     ```
   - 파일위치 : vite-react-templat/src
   - 파일명 : main.jsx
   - 파일내용

   ```jsx
   import React from "react";
   import ReactDOM from "react-dom";

   console.log(React.version, ReactDOM.version);
   ```

3. 위 내용으로 콘솔에서 React와 React-dom 의 버전이 같은 것을 확인!
4. main.jsx 내용 수정

   ```jsx
   import React, { StrictMode } from "react";
   import { createRoot } from "react-dom/client";

   function App() {
     return (
       <div className="App">
         <h1>React 웹 앱</h1>
       </div>
     );
   }

   const domNode = document.getElementById("react-app");
   createRoot(domNode).render(
     <StrictMode>
       <App />
     </StrictMode>
   );
   ```

---

# 파비콘 넣기

1. 최상위에 public 폴더를 만들고
2. svg 이미지 넣기

   <참고> svg 최적화 코드 넣는 사이트

   [SVGOMG - Optimize and minify SVG images](https://svgomg.net/)

### ❓ 파비콘을 public 폴더에 넣은 이유는?

    → 파비콘은 자주 바뀌는 이미지가 아니라서 동적 자산이 아닌 정적 자산으로 간주하여 public 폴더에 넣음
    → 정적 자산 : public
    → 동적 자산 : src

---

# Vite에서 제공되는 환경변수 체크

1. main.jsx 에서 아래 내용을 콘솔에 찍어보기

   ```jsx
   console.log(import.meta.env);
   ```

2. 콘솔에 찍힌 내용을 해석하면
   - BASE_URL : "/" : 퍼블릭 폴더를 가리킴
   - DEV : true : 현재 개발버전이다 (프로덕션 모드에서는 false 로 나올 것)
   - MODE : "development" : 개발 모드이다.
   - PROD : false : 프로덕션이 아니다. (프로덕션 모드에서는 true로 나올 것)
   - SSR : false : server side rendering

→ 이걸 왜 확인했냐면,

[Vite의 환경 변수와 모드](https://ko.vitejs.dev/guide/env-and-mode.html#html-env-replacement)

지금 우리가 작업하고 있는 index.html은 실제로 브라우저가 그리는 html 이 아님. 이건 비트가 배포를 목적으로 하는 일종의 템플릿 파일임. 그래서 이 index.html 에서는 환경변수를 사용할 수 있음. (프로덕션의 index.html 에서는 못 씀)

그래서 index.html 의 title 에

```html
<title>%MODE% | Vite + React 커스텀 템플릿</title>
```

이라고 쳐두면 (이것도 vite가 제공하는 환경변수)

- 라이브서버에서는 development 라고 출력되고
- pnpm build 후 생성된 dist 폴더의 index.html 에서는 production 이라고 출력됨

---

# App.jsx 파일 생성하기

1. main.jsx 파일에서 아래 코드를 잘라내고

```jsx
function App() {
  return (
    <div className="App">
      <h1>React 웹 앱</h1>
    </div>
  );
}
```

2. src/App.jsx 파일을 만들어서 아래 내용으로 작성

```jsx
//React is not defined
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>React 웹 앱</h1>
    </div>
  );
}

export default App;
```

3. main.jsx는 아래 내용으로 수정

```jsx
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Vite 클라이언트 환경(브라우저)에서 사용 가능한 환경 변수
// console.log(import.meta.env);

const domNode = document.getElementById("react-app");
createRoot(domNode).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

- Vite는 타입스크립트에 매우 친화적임
- 그래서 타입스크립트를 바로 사용할 수 있음
- But 노드, 리액트, 리액트 돔은 타입스크립트를 바로 사용할 수 없음. 그래서 래퍼런트 참조를 해야함
- 암튼 그래서 뭔가를 설치하면 개발할 때 더 유용할 것이다
- 자 그럼 어떻게 하냐…

아 그런데 여기서 질문!

### 🧐 타입스크립트를 사용하지 않는데 왜 설치하는걸까

    → 이는 개발자 경험 (DX) 향상을 위함
    → 개발자는 더 나은 경험 향상을 통해서 개발을 더 쉽고 편리하고 빠르게 유지관리하고 싶다.
    → 그러면 타입스크립트(TS *.d.ts)에 친화적인 에디터를 사용하면
    → 그럼 이 에디터가 보다 나은 사용자의 경험을 제공할 수 있다..
    → ESLint 를 사용하면 코드가 자동완성, 또는 잘못된 부분을 지적해주는 기능이 있어서 이런 경험을 제공받은 개발자는 경험향상을 가져올 수 있는 것과 같은 맥락임

---

# React, Node 타입 선언 패키지 설치

1. 터미널에서 `pnpm ls @types/node` 라고 쳐보면 아무것도 안나옴 (설치가 안되어있다는 뜻)
2. 아래 명령 넣어서 @types/ 리액트, 리액트돔, 노드 설치

```bash
pnpm add @types/react @types/react-dom @types/node -D

//위의 코드가 너무 길면 아래로 넣어도 됨
pnpm add @types/{react,react-dom,node} -D
```

1. package.json 파일에서 설치된 것 확인

```bash
{
	"type": "module",
	"private": true,
	"name": "vite-react-template",
	"version": "0.0.1",
	"discription": "Vite 커스텀 템플릿을 사용해 React 프로젝트를 오토 스캐폴딩",
	"scripts": {
		"dev": "vite",
		"build": "vite build",
		"preview": "vite preview"
	},
	"devDependencies": {
		"@types/node": "22.0.0",
		"@types/react": "18.3.3",
		"@types/react-dom": "18.3.0",
		"vite": "5.3.5"
	},
	"dependencies": {
		"react": "18.3.1",
		"react-dom": "18.3.1"
	}
}
```

---

# @vitejs/plugin-react 설치

⚠️ 콘솔창에 React is not defined 오류를 해결하러 가보쟈

**@vitejs/plugin-react** 를 설치하면

- 트랜스폼 해주는 바벨, 타입스크립트, 비트 등에게 우리가 리액트를 이렇이렇게 돌리고자 한다 라고 말을 해줘야하는데,
- 매번 말해주기엔 힘드니 자동으로 주입해주려고하는데
- 비트는 기본적으로 그런 기능이 없으니,
- 어떠한 플러그인을 설치해서 아래 코드를 자동으로 주입해줄 수 있다!
  ```bash
  //우리가 말하고자 하는 내용
  import {jsx as _jsx} from 'react/jsx-runtime';
  ```
- 그 플러그인이 바로 **@vitejs/plugin-react 인데**
- 이걸 설치하면 자동으로 저걸 주입해준다
- 또는 바벨에 대한 플러그인이나 프리셋을 우리가 원하는대로 커스터마이징 할 수 있고
- 설치 사이즈도 매우 작다..!

**→ 결국 보다 나은, 진보된 형태의 js 타입을 쓰기 위해 설치하는 것!**

어떻게 깔아요?

1. 터미널에서 아래 명령 넣기!

   ```bash
   pnpm add @vitejs/plugin-react -D
   ```

2. package.json 에서 아래 내용 추가 된거 확인하기!

   ```jsx
   devDependencies:
   + @vitejs/plugin-react 4.3.1
   ```

---

# vite.config.js 파일 작성

1. 최상위 폴더에서 vite.config.js 파일 생성
2. 파일 내용

   ```jsx
   import { defineConfig } from "vite";
   import pluginReact from "@vitejs/plugin-react";

   const viteConfig = defineConfig({
     plugins: [pluginReact()],
   });
   export default viteConfig;
   ```

   여기까지 했을 때

   App.jsx 와 main.jsx 상단에서

   ```jsx
   import React from "react";
   ```

   를 안 불러와도 문제가 없어야 하는데 어디한번 확인해보쟈!

   - App.jsx 파일의 상단의 저 import 를 삭제해도 vite 서버에서 문제 없이 구동되는걸 확인 가능
   - main.jsx 파일 상단의
     `import React, { StrictMode } from "react";` 를
     `import { StrictMode } from "react";` 로 수정해봐도
     vite 서버에서 문제 없이 구동되는걸 확인 가능

     → 혹시 정상적으로 보이지 않을 경우 vite 서버를 종료하고
     → 다시 pnpm dev 명령으로 vite 서버를 다시 열어서 확인해보기!

3. vite.config.js 파일 내용 수정

   ```jsx
   import { defineConfig } from "vite";
   import pluginReact from "@vitejs/plugin-react";

   const viteConfig = defineConfig({
     plugins: [
       pluginReact({
         jsxRuntime: "automatic",
       }),
     ],
   });
   export default viteConfig;
   ```

---

# ESLint 설치 + 초기구성

    🧨 여기까지만 해도 페이지는 구현되는데, 문제는 이것만 가지고는 오류를 알려주지 않는다는 것!

### 그래서? ESLint 설치하러 가보자

1.  ESLint 가 깔려있는지 먼저 체크
    아래 명령어를 넣어도 아무것도 나오지 않으면 없다는 뜻
    `bash
pnpm ls eslint
`
2.  터미널에 명령어 입력

    ```bash
    pnpm create @eslint/config@latest
    ```

    → To check syntax and find problems

    → JavaScript modules(import/export)

    → React

    → (TypeScript??) No

    → Browser & Node 둘다 체크

    → (install now?) Yes

    → pnpm

3.  설치 완료된 메시지 확인

    ```bash
    devDependencies:
    + @eslint/js 9.8.0
    + eslint 9.8.0
    + eslint-plugin-react 7.35.0
    + globals 15.8.0

    Done in 3.5s
    Successfully created /Users/hammadam/techit/techit-react/vite-react-template/eslint.config.js file.
    ```

    - 데브 디펜던시에 저렇게 설치가 완료되었고
    - eslint.config.js 파일이 생성되었다고 알려줌

### 잠깐!

    🔥 여기서 App.jsx와 main.jsx 파일에
    ESLint가 오류를 표기하는걸 확인
    → 이 오류는 파일 상단에 import React 를 해야햔다는 오류임

    이제껏 이걸 안 불러오려고 이 고생을 했는데 왜 또 불러오래?!?!?
    사실 우리는 지금껏 Vite 한테만 말해주고 있었다. 자동으로 주입하라고…
    → 그럼 이제 "ESLint 에게도 얘기를 해줘야 함"

---

# ESLint 구성파일

1. eslint.config.js 파일 내용 수정

   ```bash
   import globals from "globals";
   import pluginJs from "@eslint/js";
   import pluginReact from "eslint-plugin-react";

   // Flat Config (ESLint v9+)
   export default [
     {
       files: ["**/*.{js,mjs,cjs,jsx}"],
     },
     {
       settings: {
         react: {
           version: "detect",
         },
       },
       plugins: {
         react: pluginReact,
         "react-hooks": pluginReactHooks,
         "react-refresh": pluginReactRefresh,
       },
     },
     {
       languageOptions: {
         parserOptions: {
           ecmaFeatures: {
             jsx: true,
           },
         },
         globals: {
           ...globals.browser, // globalThis, window, console, alert, ...
           ...globals.node, // global, process, ...
         },
       },
     },
     pluginJs.configs.recommended,
     pluginReact.configs.flat.recommended,
     {
       rules: {
         "react/react-in-jsx-scope": "off",
       },
     },
   ];

   ```

2. 위 내용으로 ESlint 에게도 말해주고 나면
3. pnpm dev 로 확인해봐도 오류 없이 잘 구동되는걸 확인 가능!

---

# ESLint 명령어 인터페이스 작성

1. package.json 에서 아래 코드 추가

   ```bash
   "lint": "eslint \"./src/**\" --report-unused-disable-directives --ignore-pattern .gitignore"
   ```

2. 전체코드 복붙..하려면 이거...

   ```jsx
   {
     "type": "module",
     "private": true,
     "name": "vite-react-template",
     "version": "0.0.1",
     "discription": "Vite 커스텀 템플릿을 사용해 React 프로젝트를 오토 스캐폴딩",
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview",
       "lint": "eslint \"./src/**\" --report-unused-disable-directives --ignore-pattern .gitignore"
     },
     "devDependencies": {
       "@eslint/js": "9.8.0",
       "@types/node": "22.0.0",
       "@types/react": "18.3.3",
       "@types/react-dom": "18.3.0",
       "@vitejs/plugin-react": "4.3.1",
       "eslint": "9.x",
       "eslint-plugin-react": "7.35.0",
       "globals": "15.8.0",
       "vite": "5.3.5"
     },
     "dependencies": {
       "react": "18.3.1",
       "react-dom": "18.3.1"
     }
   }
   ```

---

# ESLint 플러그인 구성

1. 아래 명령어로 플러그인 두개를 한번에 설치!

- eslint-plugin-react-hooks
- eslint-plugin-react-refresh

  ```bash
  pnpm add eslint-plugin-react-hooks eslint-plugin-react-refresh -D
  ```

2. eslint.config.js 내용 수정 및 추가

   ```bash
   import globals from "globals";
   import pluginJs from "@eslint/js";
   import pluginReact from "eslint-plugin-react";
   import pluginReactHooks from "eslint-plugin-react-hooks";
   import pluginReactRefresh from "eslint-plugin-react-refresh";

   // Flat Config (ESLint v9+)
   export default [
     {
       files: ["**/*.{js,mjs,cjs,jsx}"],
     },
     {
       settings: {
         react: {
           version: "detect",
         },
       },
       plugins: {
         react: pluginReact,
         "react-hooks": pluginReactHooks,
         "react-refresh": pluginReactRefresh,
       },
     },
     {
       languageOptions: {
         parserOptions: {
           ecmaFeatures: {
             jsx: true,
           },
         },
         globals: {
           ...globals.browser, // globalThis, window, console, alert, ...
           ...globals.node, // global, process, ...
         },
       },
     },
     pluginJs.configs.recommended,
     pluginReact.configs.flat.recommended,
     {
       rules: {
         ...pluginReactHooks.configs.recommended.rules,
         "react-refresh/only-export-components": "warn",
         "react/react-in-jsx-scope": "off",
       },
     },
   ];

   ```

---

# @ 기호를 절대경로로 사용 설정

1. vite.config.js 파일 내용 수정

   - Vite: JavaScript API
   - Vite: new URL(url, import.meta.url)
   - Node.js: URL 모듈

   ```jsx
   import { defineConfig } from "vite";
   import { fileURLToPath, URL } from "node:url";
   import pluginReact from "@vitejs/plugin-react";

   const viteConfig = defineConfig({
     base: "/",
     server: {
       host: "localhost",
       port: 3000,
     },
     plugins: [
       pluginReact({
         jsxRuntime: "automatic",
       }),
     ],
     resolve: {
       alias: {
         "@": fileURLToPath(new URL("./src", import.meta.url)),
       },
     },
   });

   export default viteConfig;
   ```

2. main.jsx 상단의
   `import App from "./App";` 를
   `import App from "@/App";` 로 수정하고
3. src/styles/global.css 파일 생성

   ```css
   :root{
     --white:#fff;
     --black:#000l

     -round-xs:2px;
   }

   body{
     margin:0;
     background-color:var(--black);
     color:var(--white);
   }
   ```

4. main.jsx 파일에서 css 파일 불러오기

   ```css
   import "@/styles/global.css";
   ```

5. vite 서버를 재구동해서 잘 구현되는지 확인!

---

# VSCode도 @기호가 절대경로인걸 알려주자

    ❓ 왜냐하면???
      이제껏 Vite 한테만 @기호가 절대경로라고 말해준 것임
      VSCode 에게도 말해줘야함!

1. 최상위 폴더에서 jsconfig.json 파일 만들기

   ```jsx
   {
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@/*": ["src/*"]
       }
     }
   }
   ```

2. 이제 main.jsx 등에서 @기호에 마우스를 올리고 cmd+클릭하면
   탐색이 가능해짐. 바로 그 파일이 열림

> 끝! 프로젝트를 시작해보자!
