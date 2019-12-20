import * as React from "react";
import Member from '../SFC/NavChrome/Member/Member'


export default class Members extends React.Component<any, any>{

    state = {
        person:[
            {
                name: "Kamrul Hasan",
                imageUrl: "",
                secondaryText: "SharePoint Architect"
            },
            {
                name: "Masudur Rahman",
                imageUrl: "",
                secondaryText: "SharePoint Developer"
            },
            {
                name: "Faruk Ahmad",
                imageUrl: "",
                secondaryText: "SharePoint Consultant"
            }
        ]
    }

    public render(): React.ReactElement<any>{
        
        let memberList = this.state.person.map(x=>{
            return(
                <Member 
                    name={x.name} 
                    imageUrl={x.imageUrl} 
                    secondaryText={x.secondaryText}
                />
            );
        })

        return(
            // <div>
            //     <Member 
            //         name={this.state.person[0].name} 
            //         imageUrl={this.state.person[0].imageUrl} 
            //         secondaryText={this.state.person[0].secondaryText}
            //     />
            //     <Member 
            //         name={this.state.person[1].name} 
            //         imageUrl={this.state.person[1].imageUrl} 
            //         secondaryText={this.state.person[1].secondaryText}
            //     />
            //     <Member 
            //         name={this.state.person[2].name} 
            //         imageUrl={this.state.person[2].imageUrl} 
            //         secondaryText={this.state.person[2].secondaryText}
            //     />
            // </div>
            <div>
                {memberList}
            </div>

        );

    }
}