import React, {useState} from "react"

const Tabs = (props) => {

    const [visibleTab, setVisibleTab] = useState(props.titleList[0].id)

    const listTitles = props.titleList.map((item) =>
        <li id={item.id}
            onClick={() => setVisibleTab(item.id)}
            className={`${visibleTab === item.id ? `border-b-2 border-blue text-blue ` : `border-b-2 border-gray text-gray`} flex-1 mr-2 hover:border-border-b-2 hover:border-blue hover:text-blue cursor-pointer`}>
            <a className="text-center block py-2 px-4  font-bold sm:text-lg">{item.tabTitle}</a>
        </li>
    )

    const listContent = props.titleList.map((item) =>
        <div id={item.id} style={visibleTab === item.id ? {} : {display: 'none'}}>
            {item.tabContent.rows.map(el =>
                <tr id={el.id} className="row">
                    <td className="lg:col-5">{el.info}</td>
                    <td className="lg:offset-1 lg:col-5">{el.bspData}</td>
                </tr>
            )}
        </div>
    )

    return (
        <div>
            <div className="tabs">
                <ul className="flex">
                    {listTitles}
                </ul>
                <div className="tab-content">
                    <table className="container">
                        <thead>
                        <tr id={0} className="row pt-4">
                            <th className="lg:col-5">Informationen über das Produkt</th>
                            <th className="lg:offset-1 lg:col-5">Beispieldaten</th>
                        </tr>
                        </thead>
                        <tbody>
                        {listContent}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )

}

export default Tabs;
