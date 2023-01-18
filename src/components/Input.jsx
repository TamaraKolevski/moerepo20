

export const Input = ({type, placeholder, value, onChange, onMouseDown, onMouseUp, name,}) => {


    const shouldShowTextAreaForComment = () => {
        return name === "comment"  && value && value.length >= 8
    }
    return <div>
        {
        shouldShowTextAreaForComment()
        ? <textarea name="" id="" cols="30" rows="10"
         value={value} onChange={onChange}/>
        : <input 
        type={type} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        
        />}

        {name === "password" &&
            <input
                type="button"
                placeholder="BTN"
                value="Show/ Hide"
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                
            />
        }

    </div>
}