import ComponentB from  '../components/ComponentB';
import React from "react";
import { useState } from 'react';


const ComponentA =({name}:NameProp) => {
    return <ComponentB name = {name} />;
};

export default  ComponentA;