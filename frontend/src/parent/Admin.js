import { Grid } from "@mui/material";
import ListChild from "./ListChild";

export default function AdminPage(){
    return (
        <Grid
            container
  direction="row"
  justifyContent="center"
  alignItems="center">
    <ListChild></ListChild>
    <ListChild></ListChild>
        </Grid>
    );
}
