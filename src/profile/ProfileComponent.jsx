import React from 'react'

function ProfileComponent({fullName, bio, profession, children}){
    const styleObj = { textAlign : 'center', color: 'blue' }

    return(
        <div style={styleObj}>
            <div><span>FULLNAME : {fullName} </span> </div>  
            <div><span>BIO:  {bio} </span></div>
            <div><span>PROFESSION :  {profession} </span> </div>  
            <div>{children}  </div>  
        </div>
    )
    
}
{/*ProfileComponent.defaultProps= {
    fullName = 'GoMyCode School',
    bio = 'Student of GoMyCode',
profession = 'CodeGomycode';
};*/}
export default ProfileComponent;