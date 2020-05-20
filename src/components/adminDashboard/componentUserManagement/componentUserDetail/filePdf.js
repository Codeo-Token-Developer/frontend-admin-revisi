import React from "react";

import jspdf from "jspdf";

export default function FilePDF(props) {
    
    const createPdf=()=>{
        let pdf=new jspdf();
        var imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'JPEG', 0,0);
        pdf.save(props.filename);
        
    };

    return (
        <>

        </>
    );
}