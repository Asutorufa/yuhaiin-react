import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
        <div className="pt-2 border-bottom" style={{ overflowY: 'hidden', height: '52px' }}>
            <div style={{ overflow: 'auto hidden' }}>
                <Nav variant="pills" style={{ paddingBottom: '100px', paddingLeft: '10px', flexWrap: 'nowrap' }}>
                    <Nav.Item><NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/">HOME</NavLink></Nav.Item>
                    <Nav.Item><NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/yuhaiin/group">GROUP</NavLink></Nav.Item>
                    <Nav.Item><NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/yuhaiin/tag">TAG</NavLink></Nav.Item>
                    <Nav.Item><NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/yuhaiin/subscribe">SUBSCRIBE</NavLink></Nav.Item>
                    <Nav.Item><NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/yuhaiin/connections">CONNECTIONS</NavLink></Nav.Item>
                    <Nav.Item><NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/yuhaiin/config">CONFIG</NavLink></Nav.Item>
                    <Nav.Item><NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/yuhaiin/tools">TOOLS</NavLink></Nav.Item>
                    <Nav.Item><NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/pprof">PPROF</NavLink></Nav.Item>
                </Nav>
            </div>
        </div>
    );
}

export default NavBar;