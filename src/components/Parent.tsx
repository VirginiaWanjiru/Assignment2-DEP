import { useState } from "react";
import ComponentA from  "./ComponentA";




const Parent =()=> {
    const [name,setName] = useState ('Virginia Wanjiru Wanganga');
    return <ComponentA name ={name}/>;
}


export default Parent;


