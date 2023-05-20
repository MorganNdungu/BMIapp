import { Button } from "react-bootstrap"; 
import {useState} from "react";
// import Form from 'react-bootstrap/Form';

// const BmiCalc = () =>{
//     const [Age, setAge] = useState(0);
//     const [weight, setWeight] = useState(0);
//     const [height, setHeight] = useState(0);
//     const [bmi, setBMI] = useState('');
//     const [describe, setDescribe]= useState('');
  
//     const calculateBMI = () => {
      
//         const bmi = weight / ((height/100) * (height/100));
//         setBMI(bmi.toFixed(1))
//         if (bmi<=18.5){
//             describe('Underweight, eat eat')

//         }
//         else if(bmi>=18.5 && bmi <=25.0){
//         describe('normal, kudos')
//         }
//         else if(bmi>=25.1 && bmi<=29.9){
//             describe('overweight, to something')
//             }
//         else if(bmi>=30){
//                 describe('obeeeeeese')
//                 }

//     }
    
//     // handleChange=(event)=>{
//     //     age(event.target.value);
//     //     }
//     // }
//     // change=(event)=>{
//     //     // this.setState({
//     //         height(event.target.value);
        
//     // }
//     // handle=(event)=>{
//     //     // this.setState({
//     //         weight(event.target.value);
    
//     // }
//     // handleSubmit=(event)=>{
//     //     event.preventDefault();
//     //     console.log({
//     //         Age:this.state.age,
//     //         Height:this.state.height,
//     //         Weight:this.state.height
//     //     })
//     // }
//         return(
            
            
//                 <Form className="container">
//                     <h1 className="title">BMI calculator</h1>
//                     <Form.Label> Age</Form.Label><br></br>
//                     <Form.Control type="number"  value={Age} placeholder="Enter your age" onChangeText={(numeric)=>setAge(numeric)}/><br></br>
                    
            
//                     <Form.Label> Height</Form.Label><br></br>
//                     <Form.Control type="number" value={height} placeholder="enter your height" onChangeText={(text)=>setHeight(text)} /><br></br>

//                     <Form.Label> Weight</Form.Label><br></br>
//                     <Form.Control type="number" value={weight} placeholder="enter weight in KG" onChangeText={(text)=>setWeight(text)} /><br></br>
                  
//                   <Button variant="primary" type="submit">Calculate </Button>
//                   <Button variant="primary" type="submit">reset </Button>


//                 </Form>  
//         )
    

// }
// export default BmiCalc;

// changes

const BmiCalc = () =>{

    const [Age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState('');
    const [describe, setDescribe]= useState('');

   

    const calcBmi=(event)=>{ 
        event.preventDefault()
        if (weight === 0 ||  height === 0){
        alert('enter valid height')

     } else{

        const bmi= (weight / (height * height) )
        setBmi(bmi.toFixed(1))

        if (bmi<=18.4){
            setDescribe('Underweight, eat eat')

        }
        else if(bmi>=18.5 && bmi <=25.0){
        setDescribe('normal, kudos')
        }
        else if(bmi>=25.1 && bmi<=29.9){
            setDescribe('overweight, to something')
            }
        else if(bmi>=30){
                setDescribe('obeeeeeese')
                }
     }
    }
    let imgsrc;
    if (bmi<1){
        imgsrc= null
    }else {
        if ( bmi>=18.5 && bmi<=25){
            imgsrc= require('./image/normal.jpeg')
        }else if (bmi>=25.1 && bmi<29.9){
            imgsrc=require('./image/over1.jpeg')
        }else{
            imgsrc=require('./image/obese.jpeg')
        }
    }

    

    return(
     <div className='container'>
        <div className="app">
        <h2 className='title'>BMI calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Age</label>
            <input value={Age} onChange={(event)=>setAge(event.target.value)}></input>
          </div>
          <div>
            <label>Height(m)</label>
            <input value={height} onChange={(event)=>setHeight(event.target.value)}></input>
          </div>
          <div>
            <label>Weight(kg)</label>
            <input value={weight} onChange={(event)=>setWeight(event.target.value)}></input>
          </div>
          <div>
          <Button className='btn' variant="primary" type='submit'>Submit</Button>
          {/* <Button className='btn btn-outline' onClick={reset} type='submit'>reset</Button> */}
          </div>

        </form>
        <div className='center'>
          <h3>your BMI is: {bmi}</h3>
          <p>{describe}</p>

          <div className='img'>
            <img src={imgsrc} alt=''></img>
          </div>

        </div>
        </div>
      </div>
    )
    
}
export default BmiCalc;