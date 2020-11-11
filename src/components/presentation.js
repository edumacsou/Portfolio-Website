import React from 'react';
import {socials} from './components';
import "../style.css";

function SocialButton(props){

    function pressed(e) {
        const element = e.target.parentElement
        console.log(element.className)
        if(element.className == 'link-btn'){
            element.style.background = '#3afbfe'
        }else {
            e.target.style.background = '#3afbfe'
        }
    }

    function release(e) {
        const element = e.target.parentElement
        console.log(element.className)
        if(element.className == 'link-btn'){
            element.style.background = 'white'
        }else {
            e.target.style.background = 'white'
        }
    }

    return (
        <a
        href={props.data.link}
        className='link-btn'
        target='_blank'
        onMouseDown={pressed}
        onMouseUp={release}
        >
            <img 
            className='btn-icon'
            src={props.data.icon}>
            </img>

            <span className='btn-text'>
                {props.data.name}
            </span>
        </a>
    )
}

function swipe(){
    window.scrollTo(0, 710);
}

export function Presentation(){
    return (
        <div className='profile-bg'>
            <button id='btn-swipe' onClick={swipe}><img src='https://i.imgur.com/0mcvaBq.png'></img></button>
            <div className='profile-card'>
                <img id="profilePhoto" src="https://i.imgur.com/Ie6EeIQ.png" />
                <div className="name">Eduardo Maciel</div>
                <div className="description">Full-Stack Developer</div>
                <div className='social-bar'>
                    {socials.map((social)=>{return <SocialButton data={social} />})}
                </div>
            </div>
        </div>
    )
}