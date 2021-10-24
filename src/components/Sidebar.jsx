import React from 'react';
import { Menu, MenuItem, ProSidebar, SidebarHeader, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './App.scss';


function Sidebar() {
    return (     
     <>
<ProSidebar>
<SidebarHeader>
    <div  style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
 Neuroscience 101
 </div>
  </SidebarHeader>


  <Menu >
    <MenuItem  suffix={<span className="badge red">important</span>}>Brain Anatomy</MenuItem>
    <SubMenu title="Neurons" >
      <MenuItem>Chapter 1</MenuItem>
      <MenuItem>Chapter 2</MenuItem>
    </SubMenu>
    <SubMenu title="Brain" >
      <MenuItem>Chapter 1</MenuItem>
      <MenuItem>Chapter 2</MenuItem>
      <MenuItem>Chapter 3</MenuItem>
      <MenuItem>Chapter 4</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>;
  </>      
             
    );
  }
  
  export default Sidebar;
  


