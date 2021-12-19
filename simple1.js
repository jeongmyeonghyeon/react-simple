function LikeButton() {
    const [liked, setLiked] = React.useState(false); // 초깃값과 함께 컴포넌트의 상탯값을 정의. 여기의 React 변수는 react.development.js 파일에서 전역 변수로 생성됨.
    const text = liked ? '좋아요 취소' : '좋아요'; // 컴포넌트의 상탯값에 따라 동적으로 버튼의 문구를 결정.
    return React.createElement( // createElement 함수는 리액트 요소를 반환함. 여기서 생성한 리액트 요소는 최종적으로 '버튼 돔 요소'가 됨.
        'button',
        { onClick: () => setLiked(!liked) }, // 버튼을 클릭하면 onClick 함수가 호출되고, 컴포넌트의 상탯값이 변경됨.
        text,
    );
}
const domContainer = document.querySelector('#react-root'); // simple1.html 파일에 미리 만들어 뒀던 돔 요소를 가져온다.
ReactDOM.render(React.createElement(LikeButton), domContainer); // react-dom.development.js 파일에서 전역 변수로 만든 'ReactDOM 변수'를 사용해서 우리가 만든 컴포넌트를 react-root 돔 요소에 붙인다.