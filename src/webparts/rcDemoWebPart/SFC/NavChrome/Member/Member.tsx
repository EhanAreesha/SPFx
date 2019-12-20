import * as React from "react";
import { Persona, PersonaSize, personaSize } from "office-ui-fabric-react";


const Member =(props: any)=>(
<div className="ms-PersonaExample">
<Persona
    text ={props.name}
    imageUrl={props.imageUrl}
    size={PersonaSize.small}
    secondaryText={props.secondaryText}

/>
</div>
);
export default Member;