import data from './data.js'
import './Accordion.css';
import { useState } from 'react';
const Accordion = () => {

    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multi, setMulti] = useState([])
    const [buttionToggle, setButtionToggle] = useState(false);

    const handleSelect = (id) => {
        setSelected(id === selected ? null : id);
    }
    const handleMultiSelect = (id) => {
        console.log("id: "+id)
        let cpyAr = [...multi];
        console.log("cpy: " +cpyAr)
        let findIndex = cpyAr.indexOf(id);
        console.log("find: " +findIndex)
        if(findIndex === -1) {
            cpyAr.push(id)
        }
        else{
            cpyAr.splice(findIndex,id)
        }
        console.log("cpyarfinal: "+cpyAr)
        setMulti(cpyAr)
    }

    return(
        <div className='wrapper'>

            <button className={enableMultiSelection ? "btnActive" : "btnNotActive"} onClick={()=>{setEnableMultiSelection(!enableMultiSelection)}}>{enableMultiSelection ?"Disable" : "Enable"} Muti Selection</button>

            <div className='accordion'>
                {
                data && data.length > 0 ? (
                    data.map((each) => {
                        return <div className='box' key={each.id}>
                            <div onClick={()=>{enableMultiSelection ? 
                                (handleMultiSelect(each.id)) : 
                                handleSelect(each.id)}} className='questions'>
                                <h3>{each.question}</h3>
                                <span>+</span>
                            </div>
                            <div className='content'>
                                {
                                    enableMultiSelection ? multi.indexOf(each.id) !== -1 && (
                                        <p>{each.answer}</p>
                                    ) : selected === each.id && (
                                        <p>{each.answer}</p>
                                    )
                                }
                                {/* {
                                    selected === each.id ? (
                                        <p>{each.answer}</p>
                                    ) : null
                                } */}
                            </div>
                        </div>
                    })
                ) : (
                    <div>
                        empty
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default Accordion;