import React, { memo } from 'react';

function UserList(props) {
    let { name, age, sex, id } = props.data;
    function getRandom() {
        return Math.floor(Math.random() * 50);
    }
    function randomuser(sex) {
        let imagePath = "";
        imagePath = `https://randomuser.me/api/portraits/thumb/${sex === 'M' ? "men" : "women"}/${getRandom()}.jpg`;
        console.log(imagePath);
        return imagePath;
    }
    return (
        <>
            <div className="media mt-3" onClick={() => { props.showAddressOnClick(id) }}>
                <img src={randomuser(sex)} className="mr-3" alt="" />
                <div className="media-body">
                    <h5 className="mt-0">{name}</h5>
                    <p>{sex}.{age}</p>
                </div>
            </div>

        </>
    )
}
export default memo(UserList);