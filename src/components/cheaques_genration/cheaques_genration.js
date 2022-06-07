import React, { Component } from 'react'
import { jsPDF } from "jspdf";
export class cheaques_genration extends Component {
  render() {
    cheaquegen = () => {
      var doc = new jsPDF();
      doc.rect(5, 80, 200, 70);
      doc.text("PAY", 10, 100);
      doc.line(25,100, 120, 100); 
      doc.text("RUPEES", 10, 120);
      doc.line(37,120, 120, 120); 
      doc.rect(122, 110,30, 10);
      doc.rect(160, 85,35, 35);
      doc.text("SCAN CODE", 161, 130);
      doc.text("BY AYUSH CHAUHAN", 50, 140);

      doc.addPage("a4","1");
    }
    return (
      <div>cheaques_genration
      
     
           
      </div>
    )
  }
}

export default cheaques_genration