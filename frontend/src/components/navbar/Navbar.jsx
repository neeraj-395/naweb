import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link as RouterLink } from "react-router-dom";

import weblogo from "../../assets/logo.svg";

function Navbar() {
    return (
        <Box component="nav" style={{ display: "flex", alignItems: "center", padding: "10px" }}>
            <RouterLink to="/" style={{ display: "flex", alignItems: "center" }}>
                <img src={weblogo} style={{ height: "50px", width: "245px" }} alt="Logo"/>
            </RouterLink>

            <List style={{ display: "flex", marginLeft: "auto" }}>
                <ListItem>
                    <RouterLink to="/" style={{textDecoration: "none", color: "#101010"}}>
                        Home
                    </RouterLink>
                </ListItem>
                <ListItem>
                    <RouterLink to="/archive" style={{textDecoration: "none", color: "#101010"}}>
                        Archive
                    </RouterLink>
                </ListItem> <ListItem>
                    <RouterLink to="/about" style={{textDecoration: "none", color: "#101010"}}>
                        About
                    </RouterLink>
                </ListItem>
            </List>
        </Box>
    );
}

export default Navbar;
