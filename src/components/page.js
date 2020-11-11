import React from 'react';
import {Presentation} from './presentation.js'
import {Projects} from './projects.js'
import "../style.css";


export class Page extends React.Component{
    render() {
        return(
            <>
                <Presentation />
                <Projects />
            </>
        )
    }
}

