const Button = (props) => {
 

    return <button {...props} style={{padding: '8px 12px', color: 'green', fontSize: '2rem'}}>
        {props.children}
    </button>
}
export default Button;