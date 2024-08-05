let EmpList = ({myData})=>{
    return(
           <table id='tbldata' className="table table-striped container">
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Salary</th>
        <th>Image</th>
    </tr>
    {
        myData.map(Emp => {
            return (
                <tr>
                    <td>{Emp.id}</td>
                    <td>{Emp.Name}</td>
                    <td>{Emp.Age}</td>
                    <td>{Emp.Salary}</td>
                    <td><img src={Emp.EmpImg} alt={Emp.Name} style={{width: '100px', height: '100px'}} /></td>
                </tr>
            )
        })
    }
</table> 
        
    );
}


export default EmpList;