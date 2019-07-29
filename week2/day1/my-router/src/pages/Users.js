import React from "react";
import {  Link } from 'react-router-dom';

export default function Users(props) {
    return (
        <ul>
            <li>
                <Link to="/users/111">张三</Link>
            </li>
            <li>
                <Link to="/users/222">李四</Link>
            </li>
        </ul>
    )
}
