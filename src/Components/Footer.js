import React from "react";

function Footer(props){
    return (
        <>
            <footer className={`bg-${props.mode} text-${props.mode==="light"?'dark':'light'} text-center py-4 mt-5`}>
                <div className="container">
                    <p>&copy; 2023 TextUtils. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;