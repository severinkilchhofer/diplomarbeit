import React, {useState} from "react"

const MehrwertTabs = (props) => {

    const [visibleTab, setVisibleTab] = useState(props.data[0].id)

    const listTitles = props.data.map((item) =>
        <li id={item.id}
            onClick={() => setVisibleTab(item.id)}
            className={`${visibleTab === item.id ? `border-b-2 border-blue text-blue ` : `border-b-2 border-gray text-gray`} flex-1 mr-2 hover:border-border-b-2 hover:border-blue hover:text-blue cursor-pointer`}>
            <a className="text-center block py-2 px-4  font-bold sm:text-lg">{item.tabTitle}</a>
        </li>
    )

    const listContent = props.data.map((item) =>
        <div id={item.id} style={visibleTab === item.id ? {} : {display: 'none'}}>
            {item.tabContent.textList.map(el =>
                <p className="font-bold pt-4">{el.text}</p>
            )}
        </div>
    )

    return (
        <div>
            <div className="tabs">
                <ul className="flex pb-4">
                    {listTitles}
                </ul>
                <div className="tab-content">
                    {listContent}
                </div>
            </div>
        </div>
    )

}

export default MehrwertTabs;
