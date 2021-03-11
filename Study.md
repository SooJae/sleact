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

# Options 
같은 도메인인 경우 프록시에서 CORS 에러를 피할 수 있다.

# withCredentials 
이것을 true로 해줘야 쿠키가 전달이 된다.

# VFC vs FC
children 쓰는 컴포넌트는 FC 안쓰는 컴포넌트는 VFC

# revalidate() vs mutate()
revalidate() 를 사용하면 응답에 정보가 있음에도 서버에 요청을 보내 총 2번을 보낸다.
이 방법은 비 효율적이므로 mutate(response.data, false)를 사용하여 따로 서버에 요청을 보내지 않아도 해당 정보를 관리한다.
두번째 인자는 shouldRevalidate 값이다. true면 우선 캐시로 변경후 변경한 값이 맞는지 확인하기 위해 서버에 요청한다. 이를 OPTIMISTIC UI라고 부른다.
false를 할경우 서버에 요청까지도 하지 않는다.

# dedupingInterval
캐시 유지 기간이다. 2초라고 하면 2초동안 서버에 아무리 요청을 하더라도 한번만 보내고 나머지는 요청받은 데이터를 캐싱해서 보내준다.

# console.log 단축키
'hi'.log => console.log('hi');

# hooks는 return아래, for, if안에 있으면 안된다.

# NavLink vs Link
NavLink는 activeClassName를 추가할 수 있다.
to 가 가리키는 주소와 현재 주소가 같다면 activeClassName의 클래스가 적용된다.
activeClassName="selected" 

# component, container 안쓰는 이유
hooks쓰면서 component, container를 사용하지 않는다.
props를 넘길 필요가 없기 때문이다. hooks로도 데이터 자체를 갖고올 수 있기 때문이다.

# response 데이터가 html로 오면 없는 주소를 타이핑 했을 확률이 있다!

# eslint-react-hooks도 설치하자.


# 함수를 호출하는 또 다른 방법
a``;
위와 같이 하면 함수가 호출된다.a() 와 같은 역할이다.
tagged template literal 이라고 부른다.
아래 부분은 사실 styled컴포넌트 에 있는 button이라는 메서드를 실행하는 것이다.
```js
export const EachMention = styled.button<{ focus: boolean }>`
  padding: 4px 20px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: rgb(28, 29, 28);
  width: 100%;
  & img {
    margin-right: 5px;
  }
  ${({ focus }) =>
    focus &&
    `
    background: #1264a3;
    color: white;
  `};
`;
```

# 기존에 스타일링 되어있는 컴포넌트에 다시 스타일 적용하기
```js
export const MentionsTextarea = styled(MentionsInput)` // styled(MentionsInput)을 사용하여 스타일이 적용 되어있는 MentionInput에 또 다시 스타일 적용하기
  font-family: Slack-Lato, appleLogo, sans-serif;
  font-size: 15px;
  padding: 8px 9px;
  width: 100%;
  & strong {
    background: skyblue;
  }
  & textarea {
    height: 44px;
    padding: 9px 10px !important;
    outline: none !important;
    border-radius: 4px !important;
    resize: none !important;
    line-height: 22px;
    border: none;
  }
  & ul {
    border: 1px solid lightgray;
    max-height: 200px;
    overflow-y: auto;
    padding: 9px 10px;
    background: white;
    border-radius: 4px;
    width: 150px;
  }
`;
```

# memo
props가 똑같으면 부모 컴포넌트가 리렌더링이 되어도 자식 컴포넌트는 리렌더링 되지 않는다.


# forRoot
설정을 넣어주기 위해
