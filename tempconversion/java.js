const calculateTemp = () =>{
    const temp= document.getElementById('temp').value

    const select=document.getElementById('temp_con')
    const valueT=temp_con.options[select.selectedIndex].value

    const celtofah=(cel)=>{
        let fahrenherit = ((cel * 9 /5)+32).toFixed(1)
        return fahrenherit
    }
    const fahtocel=(fah)=>{
        let celsius=((fah -32) * 5/9).toFixed(1)
        return celsius

    }
    if(valueT=='cel'){
        document.getElementById("result").innerHTML=celtofah(temp)+  " Fahrenheit"
    }
    else{
        document.getElementById("result").innerHTML=fahtocel(temp)+ " Celsius"
    }
}