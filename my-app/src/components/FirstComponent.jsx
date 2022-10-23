import Logo from './Logo';
function FirstComponent() {
    let myWidth = '200px'
    return(
    <div className="firstContainer">
        <h1>Какой-то заголовок</h1>
        <p>Какой-то текст</p>
        <Logo text="Текст, который хранится в props (свойствах)" width={myWidth}></Logo>
        

    </div>
)
}
export default FirstComponent;