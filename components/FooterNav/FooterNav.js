import React from 'react'
import Link from "next/link";

const FooterNav = (props) => {
    return (
        <div className="bg-blue">
            <div className="container py-20 text-white font-bold">
                <div className="row">
                    <div
                        className={`lg:col-12 flex ${props.navLinkBack === undefined ? `justify-end` : `justify-between`} `}>
                        {props.navLinkBack && (
                            <Link href={`/ ${props.navLinkBack}`}
                                  as={`${process.env.BACKEND_URL}/${props.navLinkBack}`}>
                                <a className="text-sm sm:text-base">&lt;- {props.navTextBack}</a>
                            </Link>)}

                        {props.navLinkForward && (
                            <Link href={`/ ${props.navLinkForward}`}
                                  as={`${process.env.BACKEND_URL}/${props.navLinkForward}`}>
                                <a className="text-sm sm:text-base">{props.navTextForward} -&gt;</a>
                            </Link>)}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default FooterNav;
