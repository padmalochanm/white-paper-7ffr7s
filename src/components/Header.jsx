import React, { useRef } from "react";
import { Tabs, TabList, Tab, Button } from "@chakra-ui/react";
import {Link } from 'react-router-dom'

 
function Header() {
  return (
    
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <img
          src="https://github.com/padmalochanm/images/blob/main/logo_1-removebg-preview.png?raw=true"
          style={{ width: "200px" }}
          alt="Logo"
        />
      </div>
      <div>
        <Tabs align="end" variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>Home</Tab>
            <Tab>
              <a href="#comp2">Our Speciality</a>
            </Tab>
            <Tab>
              <a href="#comp3">Services offered</a>
            </Tab>
            <Tab>
              <a href="#comp5">Teams and partners</a>
            </Tab>
            <Tab>
              <a href="#footer">Contact us</a>
            </Tab>
            <Tab>
            <Link to='/blog' >Blog</Link>
            </Tab>
            
              
            
          </TabList>
        </Tabs>
      </div>
    </div>
  );
}

export default Header;
