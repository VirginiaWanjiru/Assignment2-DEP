import ComponentC from  './ComponentC';
import  React, { useState } from 'react';

const ComponentB =({name}:NameProp)=>{

    return<ComponentC name={name}/>;

};



export default ComponentB;


