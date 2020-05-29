import React, {useState} from "react"

const MultiStepForm = (props) => {

    const children = props.children;

    const data = [{id: 0, compName: 'CreateRating'}, {id: 1, compName: 'CreateMuA'}]

    const [visibleStep, setVisibleStep] = useState(0) // 1

    const listTitles = data.map((item) =>
        <li id={item.id}
            onClick={() => setVisibleStep(item.id)}
            className={`${visibleStep === item.id ? `border-b-2 border-blue text-blue ` : `border-b-2 border-gray text-gray`} flex-1 mr-2 hover:border-border-b-2 hover:border-blue hover:text-blue cursor-pointer`}>
            <a className="text-center block py-2 px-4  font-bold sm:text-lg">Schritt: {item.id + 1}</a>
        </li>
    )

    const content = React.Children.map(children, (child, i) => {
            if (i === visibleStep) return
            return child
        }
    )


    return (
        <div>
            <div className="min-h-screen pt-32">
                <ul className="flex pb-4">
                    {listTitles}
                </ul>
                <div className="tab-content">
                    {content}
                </div>
            </div>
        </div>
    )

}

export default MultiStepForm;
