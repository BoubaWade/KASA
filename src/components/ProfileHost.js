import React from 'react';

const ProfileHost = ({dataFiltered}) => {
    return (
        <div className="profil">
          <p>{dataFiltered.host.name}</p>
          <img src={dataFiltered.host.picture} alt="" />
        </div> 
    );
};

export default ProfileHost;