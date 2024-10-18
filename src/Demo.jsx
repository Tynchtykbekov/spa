const Demo = (props) => {
    console.log(props);
    let sortedNums = props.list.sort((a, b) => a - b)
    return  (
        <div>
 
<h1>Demo Page</h1>
        <p>{props.text}</p>
<p>{sortedNums}</p>
        </div>
   
    )

}
export default Demo