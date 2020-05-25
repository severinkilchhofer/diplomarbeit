import React from 'react'
import Link from "next/link";

const FooterNav = (props) => {
    return (
        <div className="container py-32 text-blue font-bold">
            <div className="row">
                <div
                    className={`lg:col-12 flex ${props.navLinkBack === undefined ? `justify-end` : `justify-between`} `}>
                    {props.navLinkBack && (
                        <Link href={`/ ${props.navLinkBack}`} as={`${process.env.BACKEND_URL}/${props.navLinkBack}`}>
                            <a>&lt;- {props.navTextBack}</a>
                        </Link>)}

                    {props.navLinkForward && (
                        <Link href={`/ ${props.navLinkForward}`}
                              as={`${process.env.BACKEND_URL}/${props.navLinkForward}`}>
                            <a>{props.navTextForward} -&gt;</a>
                        </Link>)}
                </div>
            </div>
        </div>
    )

}

export default FooterNav;
