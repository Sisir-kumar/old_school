import React,{useState,useEffect} from 'react'
import './Year.css'
import Data from './data.json'
function Years() {
   const YearData=Data[1]
const [gradeoption, setGradeoption] = useState('Grade 6')
const [board, setboard] = useState('CBSE')
 const [Alldata, setAlldata] = useState('')
useEffect(()=>{
    const filterdata = YearData.yearly.filter((a)=> a.grade===gradeoption)
    const filterboard = filterdata.map(a=> a.boards )
    const{CBSE,ICSE ,Advance_Level,NTSE,JEE_Main_A,JEE_Main}=filterboard[0]
    if(board=='CBSE'){
        if(CBSE){
         setAlldata(CBSE)
        }
     }else if(board=="ICSE"){
         if(ICSE){
            setAlldata(ICSE)
         }
     }else if(board==='Advance_Level'){
          if(Advance_Level){
            setAlldata(Advance_Level)
          }
     }else if(board=="JEE_Main"){
         if(JEE_Main){
            setAlldata(JEE_Main)
         }
     }else{
         if(JEE_Main_A){
            setAlldata(JEE_Main_A)
         }
     }
        
},[gradeoption,board])

    return !Alldata?(<h1>Not in</h1>): (
        <div>
            <div>
            <ul className="n ">
                <li  >
                    <select className="selectoptions" value={gradeoption} onChange={(e)=>setGradeoption(e.target.value)}>
                        <option value='Grade 6'>Grade 6</option>
                        <option value="Grade 7">Grade 7</option>
                        <option value="Grade 8">Grade 8</option>
                        <option value="Grade 9">Grade 9</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 11">Grade 11</option>
                        <option value="Grade 12">Grade 12</option>
                    </select>
                </li>
                <li  ><button value="CBSE" className="active" onClick={(e)=>setboard(e.target.value)}>CBSE</button></li>
                <li ><button value="ICSE" onClick={(e)=>setboard(e.target.value)}>ISCE</button></li>
                <li ><button value="JEE_Main" onClick={(e)=>setboard(e.target.value)} >IB</button></li>
                <li ><button value="JEE_Main_A" onClick={(e)=>setboard(e.target.value)}>IGCSE</button></li>
                <li ><button value="Advance_Level" onClick={(e)=>setboard(e.target.value)}>ADVANCE LEVEL</button></li>
            </ul>
            </div>
            <div>
            <table className="table " >
                <thead>
                <tr>
                    <th>  
                         <div className="year__item"> 
                            <span className="year__item1">Total</span>
                            <span className="year__item2">Sessions</span>
                        </div>
                    </th>
                    <th> 
                       <div className="year__item">
                            <span className="year__item1">Online Pre</span>
                            <span className="year__item2">Assessments </span>
                        </div>
                    </th>
                    <th>
                    <div className="year__item">
                            <span className="year__item1">Online Post</span>
                            <span className="year__item2">Assessments </span>
                        </div>
                    </th>
                    <th>
                        <div className="year__item">
                            <span className="year__item1">Online </span>
                            <span className="year__item2">Practice </span>
                        </div>
                    </th>                    
                    <th>
                    <div className="year__item">
                            <span className="year__item1">Online </span>
                            <span className="year__item2">Test </span>
                     </div>
                    </th>                    
                    <th>
                       <div className="year__item">
                            <span className="year__item1">Career Counselling</span>
                            <span className="year__item2">Sessions With Edu Coach </span>
                        </div>
                    </th>                    
                                      

                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{Alldata.total_sessions} </td>
                    <td>{Alldata.online_pre_assignments} </td>
                    <td>{Alldata.online_post_assignments} </td>
                    <td>{Alldata.online_assignments} </td>
                    <td>{Alldata.online_tests} </td>
                    <td>{Alldata.career_counselling_sessions} </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Years
