import * as jsPDF from 'jspdf'
import * as autoTable from 'jspdf-autotable'
import React, { Component } from 'react';
class App extends React.Component {
    state = {
        columns : [
            { title: "Aaa", dataKey: "z" },
            { title: "Bbb", dataKey: "B" },
            { title: "Ccc", dataKey: "C" }
        ],
        rows : [
            { z: "faizan", B: "sangamesh", C: "sanket" },
            { z: "deve", B: "devops", C: "java" }
        ]
    }

saveAsPdf=()=>{
    console.log("print");
    var doc = new jsPDF('p', 'pt');
    doc.autoTable(this.state.columns, this.state.rows);

    // doc.setFontSize(20);
    // doc.setTextColor(40);
    // doc.setFontStyle('normal');
    // doc.text("YOLO", 10, 20);
    // doc.text("YOLO2", 10, 50);
    doc.save('table.pdf');
  console.log("doc",doc);   
}
    render() {
        return (
            <div>asdasd
                <button onClick={()=>this.saveAsPdf()}> save as pdf</button>
                </div>
        )
    }
}
export default App;

