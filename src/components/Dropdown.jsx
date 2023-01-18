import { getMouseEventOptions } from "@testing-library/user-event/dist/utils"



export const Dropdown = (label, options) => {

    return <div>
        <label>{label}</label>
        <select onChange={onChange}>
            {options.map()}
        </select>
    </div>
}