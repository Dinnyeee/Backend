import { Grid } from "@mui/material";
import ListChild from "./ListChild";
import AddChild from "./AddChild";
import ResponsiveAppBar from "./ResponsiveAppBar";

export default function AdminPage(){
    return (
       <div> 
        <ResponsiveAppBar></ResponsiveAppBar>
        <Grid
            container
  direction="row"
  justifyContent="center"
  alignItems="center">
    <ListChild></ListChild>
  <AddChild></AddChild>
        </Grid>

    </div>
    );
}
