import EmpArray from "../Data/EmpArray";
import EmpList from "./EmpList";
import './contentStyle.css'
let AppEmp=()=>{
    return(
        <EmpList myData={EmpArray}/>
    );
}
export default AppEmp;