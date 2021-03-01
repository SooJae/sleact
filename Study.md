# ts -> js vs ts -> babel -> js
프론트 개발을 할때, css, html, image가 있을때, 중간에 바벨을 끼워주는 것이 좋다.
css,html,image를 모두 자바스크립트로 변환 시켜주기 때문이다.

# index.html에 핵심 css를 넣자
구글에서 권장하는 방법: 핵심 css는 index.html에 넣고, 그 외 중요하지 않은 css는 css파일에 넣는다.

fork-ts-checker-webpack-plugin: 
원래는 타입스크립트 검사를 할때 블로킹 방식으로 검사를 하기 때문에 하나가 끝나야 다음이 실행이 되는데,
위의 패키지를 사용하면 타입스크립트 체킹이랑 웹팩 실행이랑 동시에 돌아가도록 해준다.

# 프로젝트 구조

pages - 페이지
components - 작은 컴포넌트, 공통 컴포넌트
layouts - 공통 레이아웃
typings -
utils - 
hooks - 

localhost:3090/login 라고 치면, 서버로 간다. 서버는 3090밖에 모른다. 웹팩 devServer에 있는 historyApiFallback: true, 
설정이라고 해야 뒤의 /login을 주소로 인식한다.

# useCallback, useMemo
useCallback은 메서드를 새롭게 생성하지 않아 메서드 자체는 메모를 해주지만, 그 메서드를 사용하는 컴포넌트를 React.memo로 최적화 해주지 않으면
데이터가 바뀔경우 무조건 자식들은 리렌더링을 하기 때문에 useCallback이 의미가 없어진다. 따라서 useCallback으로 감싼 메서드를 prop으로 받는 컴포넌트를 React.memo로 감싸는 등의 작업이 있어야 그 컴포넌트에 대한 리렌더링이 발생하지 않는다.
부모 컴포넌트 리렌더링시 자식은 어차피 같이 리렌더링돼서 그걸 막으려면 메모로 감싸야하고 useCallback을 쓰지 않으면 메모로 감싸도 리렌더링이 일어난다. 
