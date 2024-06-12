import { useEffect, useState } from "react"
import $ from 'jquery'

const colors = ["white","red", "green", "yellow", "blue", "purple"]

export default function ChangeColors(){

    const [colorIndex, setColorIndex] = useState<number>(0)

    useEffect(() =>{
        $("body").css("background-color", colors[colorIndex])
    },[colorIndex])
    const handleChange = ()=>{
        setColorIndex(( preIndex ) => (preIndex + 1) % colors.length)
    }
    const handleDefault = ()=>{
        setColorIndex(0)
    }
    return (
        <>
        <h1>切換背景顏色</h1>
        <input type="button" value="點我切換顏色" onClick={()=>{handleChange()}} />
        <input type="button" value="回到預設" onClick={()=>{handleDefault()}} />

        </>
    )
}