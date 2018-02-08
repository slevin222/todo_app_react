import React from 'react';
import '../assets/css/list-item.css';

export default props => {

    console.log("list props", props);
    return (
        <li className="collection-item listItem">
            <div className="row">
                <div className="col s6 item ${greenText}">
                    {props.title}
                </div>
                <div className="col s6 right-align">
                    <button onClick={props.toggle} className="btn btn-floating green">
                        <i className="material-icons">check</i>
                    </button>
                    <button onClick={props.delete} className="btn btn-floating red">
                        <i className="material-icons">delete</i>
                    </button>
                </div>
            </div>
        </li>
    )
}