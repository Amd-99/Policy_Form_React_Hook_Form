import React from 'react'
import ReusableForm from "./ReusableForm"
export const JobForm = () => {
    let template = {
        title : 'job Appplication form',
        fields:[
            {
                title:'FirstName',
                type:'text',
                name:'firstName',
                validationProps:{
                    required:'firstName is Mandatory'
                }


            },
            {
                title:'LastName',
                type:'text',
                name:'lastName'
            },
            {
                title:'Email',
                type:'email',
                name:'email'
            },
            
            {
                title:'Number',
                type:'number',
                name:'number'
            },
            {
                title:'Active',
                type:'checkbox',
                name:'active'
            }
           
        ],



    }
    return (
        <>
         <ReusableForm template={template}
         onSubmit={onSubmit}/>
        </>
    )
}

const onSubmit =(data)=>{
    console.log(data);
}