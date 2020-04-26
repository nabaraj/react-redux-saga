import React, { memo } from 'react';

function UserList(props) {
    let { name, age, sex, id } = props.data;
    function getRandom() {
        return Math.floor(Math.random() * 50);
    }
    function randomuser(sex) {
        let imagePath = "";
        imagePath = `https://randomuser.me/api/portraits/thumb/${sex === 'M' ? "men" : "women"}/11.jpg`;
        console.log(imagePath);
        return imagePath;
    }
    return (
        <tr onClick={() => { props.showAddressOnClick(id) }} className={`${props.currentId === id ? "table-active" : ""}`}>
            <td >
                <img src={randomuser(sex)} className="mr-3" alt="" />

            </td>
            <td className="media-body">
                <h5 className="mt-0">{name}</h5>

            </td>
            <td>
                {sex}

            </td>
            <td>{age}</td>
        </tr>
    )
}
export default memo(UserList);