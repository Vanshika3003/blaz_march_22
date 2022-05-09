const HelloTestComponent=(props)=>{
   if(!props.name){
       return (
            <h1>Hello, Mr. Unknown</h1>
       );
   }else {
    return (
        <h1>Hello, Mr. {props.name}</h1>
   );
   }   
};

export default HelloTestComponent;