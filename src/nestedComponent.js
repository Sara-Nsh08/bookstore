import React from "React";

function NestedComponent()
    {
        return(
            <div>
                <h3>Parent</h3>
                <child />
            </div>
        )      
    }
const child=() => {
    return (
        <div>
            <p>Child</p>
        </div>
    )
}
export default NestedComponent