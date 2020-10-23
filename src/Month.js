import React, { useEffect,useState } from 'react'
import './Month.css'
import Data from './data.json'
function Month() {
const MonthData=Data[0]
console.log(MonthData)

const [gradeChnage, setGradeChnage] = useState('Grade 6')
const [sessions_5Data, setsession_5Data] = useState([])
const [sessions_10Data, setsessions_10Data] = useState([])
const [sessions_20Data, setsessions_20Data] = useState([])
const [sessions_45Data, setsessions_45Data] = useState([])

 useEffect(()=>{
     const filterd = MonthData.monthly.filter((a)=> a.grade===gradeChnage)
     const filterboard=filterd.map(a=>a.boards)
     const {general}=filterboard[0]
     setsession_5Data(general.sessions_5)
     setsessions_10Data(general.sessions_10)
     setsessions_20Data(general.sessions_20)
     setsessions_45Data(general.sessions_45)
   
 },[gradeChnage])
    return (
        <div className="month ">
            <div>
                <select className="selectoption" value={gradeChnage} onChange={(e)=>setGradeChnage(e.target.value)}>
                    <option value="Grade 6">Grade 6</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Grade 11">Grade 11</option>
                    <option value="Grade 12">Grade 12</option>
                </select>
            </div>
            <div className="funkyradio">
                <div className="funkyradio-default">
                    <input type="radio"  name="radio" id="radio1"  />
                    <label for="radio1" className="radi">
                        <div className="month__item">
                            <span className="month__item1">{sessions_5Data.valid} </span>
                            <span className="month__item2">{sessions_5Data.refund} </span>
                        </div>
                        <div className="month__item">
                            <span className="month__item1 offer">&#8377;{sessions_5Data.price} </span>
                            <span className="month__item2">{sessions_5Data.discount} % off</span>
                        </div>
                        <div className="month__item">
                            <span className="month__item1">&#8377; {sessions_5Data.per_class_price} per sessions</span>
                            <span className="month__item2">{sessions_5Data.total_sessions} Sessions</span>
                        </div>
                   </label>
                </div>
                <div className="funkyradio-default">
                    <input type="radio"  name="radio" id="radio1"  />
                    <label for="radio1" className="radi">
                        <div className="month__item">
                            <span className="month__item1">{sessions_10Data.valid} </span>
                            <span className="month__item2">{sessions_10Data.refund} </span>
                        </div>
                        <div className="month__item">
                            <span className="month__item1 offer">&#8377;{sessions_10Data.price} </span>
                            <span className="month__item2">{sessions_10Data.discount} % off</span>
                        </div>
                        <div className="month__item">
                            <span className="month__item1">&#8377; {sessions_10Data.per_class_price} per sessions</span>
                            <span className="month__item2">{sessions_10Data.total_sessions} Sessions</span>
                        </div> 
                   </label>
                </div>
                <div className="funkyradio-default">
                    <input type="radio"  name="radio" id="radio1"  />
                    <label for="radio1" className="radi">
                        <div className="month__item">
                            <span className="month__item1">{sessions_20Data.valid} </span>
                            <span className="month__item2">{sessions_20Data.refund}</span>
                        </div>
                        <div className="month__item">
                            <span className="month__item1 offer">&#8377; {sessions_20Data.price} </span>
                            <span className="month__item2">{sessions_20Data.discount} % off</span>
                        </div>
                        <div className="month__item">
                            <span className="month__item1">&#8377;{sessions_20Data.per_class_price} per sessions</span>
                            <span className="month__item2">{sessions_20Data.total_sessions} Sessions</span>
                        </div> 
                   </label>
                </div>
                <div className="funkyradio-default">
                    <input type="radio"  name="radio" id="radio1"  />
                    <label for="radio1" className="radi">
                        <div className="month__item">
                            <span className="month__item1">{sessions_45Data.valid}</span>
                            <span className="month__item2">{sessions_45Data.refund} </span>
                        </div>
                        <div className="month__item">
                            <span className="month__item1 offer">&#8377;{sessions_45Data.price} </span>
                            <span className="month__item2">{sessions_45Data.discount} % off</span>
                        </div>
                        <div className="month__item">
                            <span className="month__item1">&#8377; {sessions_45Data.per_class_price} per sessions</span>
                            <span className="month__item2">{sessions_45Data.total_sessions} Sessions</span>
                        </div> 
                   </label>
                </div>
            </div>
        </div>
    )
}

export default Month
