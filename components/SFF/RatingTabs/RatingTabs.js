import React, {useState} from "react"

const RatingTabs = (props) => {

    const [visibleTab, setVisibleTab] = useState(props.data[0].id)

    const listTitles = props.data.map((item) =>
        <li id={item.id}
            onClick={() => setVisibleTab(item.id)}
            className={`${visibleTab === item.id ? `border-b-2 border-blue ` : `border-b-2 border-gray`} flex-1 mr-2 hover:border-border-b-2 hover:border-blue cursor-pointer`}>
            <a className="text-center block py-2 px-4 font-bold sm:text-lg">
                <div>
                    <button
                        className={`rating${item.ratingBegin} w-6 h-6 sm:w-12 sm:h-12 rounded-tl-full rounded-bl-full rounded-br-full focus:outline-none`}>
                        <p className="font-bold text-sm sm:text-base">{item.ratingBegin}</p>
                    </button>&nbsp;-&nbsp;
                    <button
                        className={`rating${item.ratingEnd} w-6 h-6 sm:w-12 sm:h-12 rounded-tl-full rounded-bl-full rounded-br-full focus:outline-none`}>
                        <p className="font-bold text-sm sm:text-base">{item.ratingEnd}</p>
                    </button>
                </div>
            </a>
        </li>
    )

    const listContent = props.data.map((item) =>
        <div id={item.id} style={visibleTab === item.id ? {} : {display: 'none'}}>
            {item.tabContent.textList.map(el =>
                <div>
                    <h3 className="pt-4">{el.title}</h3>
                    <p className="pb-4">{el.text}</p>
                </div>
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

export default RatingTabs;
