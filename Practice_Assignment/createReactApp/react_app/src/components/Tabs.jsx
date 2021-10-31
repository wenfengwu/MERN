import React, {useState} from 'react'

const Tabs = () => {

  const [tabs, setTabs] = useState([
    {label: "tab1", content: "Tab 1 content is showing here"},
    {label: "tab2", content: "Tab 2 content is showing here"},
    {label: "tab3", content: "Tab 3 content is showing here"}
  ])

  const [activeTab, setActiveTab] = useState(tabs[0].content)

  const setActive = (value) =>{
    setActiveTab(value.content)
  }

  return (
    <div style = {{display: "flex"}}>
        {tabs.map((item, idx) => {
          return <button key= {idx} onClick = {(e) => setActive(item)}> {item.label} </button>
        })}
        <textarea cols="30" rows="10" value = {activeTab}></textarea>
    </div>
  )
}

export default Tabs;



