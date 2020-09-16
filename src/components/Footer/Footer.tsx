import React, { ReactElement } from 'react'
import "./footer.css"

interface Props {
    
}

function Footer({}: Props): ReactElement {
    return (
        <footer className="footer">
            <span>© 2020 Walmart. All Rights Reserved.</span>
        </footer>
    )
}

export default Footer
