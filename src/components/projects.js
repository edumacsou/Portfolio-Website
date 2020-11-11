import React from 'react';
import "../style.css";
import {projectsData} from './components';

function RadioInputs(props){

    let id= 'r'+(props.index + 1)
    let margin = (props.index * (-100/projectsData.length))+'%'
    
    document.styleSheets[0].insertRule(`#${id}:checked ~ .s1 { margin-left: ${margin}; }`, 0);

    if(props.index==0){
        return <input type="radio" name="r" id={id} defaultChecked={true}/>
    } else {
        return <input type="radio" name="r" id={id} />
    }
}

function Slides(props) {
    let thisClass = "slide"
    if(props.index==0){
        thisClass += " s1"
    }
    return (
        <div className={thisClass}>
            <img src={props.data.photo} alt="" />
            <div className='description-bar'>
                <h2>{props.data.name}</h2>
                <p>{props.data.description}</p>
                <a href={props.data.link} target='_blank'>Read More</a>
            </div>
        </div>
    )
}

function Labels(props) {
    let id = 'r'+(props.index + 1)
    return <label for={id} className="bar"></label>
}

export function Projects(){
    let number_of_projects = projectsData.length;
    document.styleSheets[0].insertRule(`.slides { width: ${(number_of_projects*100)+'%'}; height: 100%; position: absolute; display: flex; }`, 0);

    document.styleSheets[0].insertRule(`.slide { width: ${(100/number_of_projects)+'%'}; display: flex; position: relative;transition: 0.6s; }`, 0);

    return(
        <div className='projects'>
            <h1>MY PROJECTS</h1>
            <div className='slidershow'>
                <div className='slides'>
                    {projectsData.map((data, index)=>{return <RadioInputs index={index} />})}
                    {projectsData.map((data, index)=>{return <Slides data={data} index={index} />})}
                </div>
                <div className='navigation'>
                    {projectsData.map((data, index)=>{return <Labels index={index}/>})}
                </div>
            </div>
        </div>
    )
}