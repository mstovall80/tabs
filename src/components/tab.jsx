import React, {useState} from 'react';


const Tab = (props) => {

    const [tab, setTab] = useState([
        {
            lable: "tab 1",
            content: "this is content 1"
        },
        {
            lable: "tab 2",
            content: "this is content 2"
        },
        {
            lable: "tab 3",
            content: "this is content 3"
        },
    ])

    const [selected_i, setSelected_i] = useState(0);



    const tabClickHandler = (e, idx) => {
        console.log('clicked ->' , idx);
        setSelected_i(idx)
    }


    return <div>
        {/* {JSON.stringify(tab)} */}
        {
            tab.map((tab, i)=> {
                return <button key= {i} onClick={ (e) => {
                    tabClickHandler(e, i)
                }}>{tab.content}</button>
            })
        }
        <hr />
        <p>{tab[selected_i].content}</p>

    </div>

}
export default Tab;