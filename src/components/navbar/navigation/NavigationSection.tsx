import React, { CSSProperties } from 'react';

import './NavigationSection.css';

import streamLogo from "../../../assets/images/logo-livestream.png";
import Link from '../../link/Link';
import IconButton from '../../iconButton/IconButton';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const linkStyle: CSSProperties = {
    margin: "5px 20px"
}

export default function NavigationSection() {
    return <div id="navigation-section">
        <a className="logo" href="/"><img alt="Stream logo" src={streamLogo}/></a>
        <Link style={linkStyle} label="Browse"/>
        <IconButton tooltip="More" Icon={MoreHorizIcon}/>
    </div>
}