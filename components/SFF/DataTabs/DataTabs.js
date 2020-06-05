import React, {useState} from "react"

const DataTabs = (props) => {

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
            {item.tabContent.rows.map(el =>
                <tr id={el.id} className="row">
                    <td className="lg:col-6">{el.info}</td>
                    <td className="lg:col-6">{el.bspData}</td>
                </tr>
            )}
        </div>
    )

    return (
        <div>
            <div className="tabs">
                <ul className="flex" style={{overflowX: 'auto'}}>
                    {listTitles}
                </ul>
                <div className="tab-content lg:col-12">
                    <table className="container">
                        <thead>
                        <tr id={0} className="row pt-4">
                            <th className="lg:col-6">Informationen über das Produkt</th>
                            <th className="lg:col-6">Beispieldaten</th>
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

export default DataTabs;
