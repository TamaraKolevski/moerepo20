import {Dropdown} from "./Dropdown"

import {socials, people} from "../mockData"



export const DisplyDropdown = () => {

    return <div>
    
    {Socials}
    <Dropdown />
    <p> selected Social : {socialselected} </p>
    
    {People}
    <Dropdown />
    <p> selected Person : {personselected} </p>
    
    
    </div>

}