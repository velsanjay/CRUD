import { useHistory, useParams } from "react-router-dom"

export function ViewUser({user}){
    const history=useHistory();    
    const {id}=useParams()
    const student=user[id]
    console.log(student)
return(
    <div style={{height:"100vh"}}>
        <h1>Hii {student.name}</h1>
                <div className="card1">
                    <h2><b>Name : </b>{student.name}</h2>
                    <p><b>Reg No :</b> {student.regNo}</p>
                    <p><b> Email :</b> {student.email}</p>
                    <p><b>Exp : </b>{student.exp}</p>
                     <button
                    className="but"
                    onClick={()=>history.push("/")}
                    >Go Back</button>
                    
                </div>

    </div>
)
}