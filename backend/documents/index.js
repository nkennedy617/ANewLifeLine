module.exports = ({ name, email, location, phone, school,
                      schoolLocation, degree, major, gpa,
                      startDateEducation, endDateEducation,
                      school2, schoolLocation2, degree2, major2, gpa2,
                      startDateEducation2, endDateEducation2,
                      company, jobTitle, jobLocation, jobDescription,
                      startDateJob, endDateJob, company2, jobTitle2,
                      jobLocation2, jobDescription2, startDateJob2,
                      endDateJob2, skill1, skill2, skill3, activities, summary
                  }) => {
    const today = new Date();
    return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
<!--
 /* Font Definitions */
 @font-face
	{font-family:Wingdings;
	panose-1:5 0 0 0 0 0 0 0 0 0;}
@font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
	{font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;}
@font-face
	{font-family:Georgia;
	panose-1:2 4 5 2 5 4 5 2 3 3;}
@font-face
	{font-family:Consolas;
	panose-1:2 11 6 9 2 2 4 3 2 4;}
@font-face
	{font-family:"Segoe UI";
	panose-1:2 11 5 2 4 2 4 2 2 3;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
h1
	{mso-style-link:"Heading 1 Char";
	margin-top:20.0pt;
	margin-right:0in;
	margin-bottom:10.0pt;
	margin-left:0in;
	page-break-after:avoid;
	font-size:14.0pt;
	font-family:"Georgia",serif;
	color:#262626;
	text-transform:uppercase;
	font-weight:bold;}
h1.CxSpFirst
	{mso-style-link:"Heading 1 Char";
	margin-top:20.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:0in;
	margin-bottom:.0001pt;
	page-break-after:avoid;
	font-size:14.0pt;
	font-family:"Georgia",serif;
	color:#262626;
	text-transform:uppercase;
	font-weight:bold;}
h1.CxSpMiddle
	{mso-style-link:"Heading 1 Char";
	margin:0in;
	margin-bottom:.0001pt;
	page-break-after:avoid;
	font-size:14.0pt;
	font-family:"Georgia",serif;
	color:#262626;
	text-transform:uppercase;
	font-weight:bold;}
h1.CxSpLast
	{mso-style-link:"Heading 1 Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:10.0pt;
	margin-left:0in;
	page-break-after:avoid;
	font-size:14.0pt;
	font-family:"Georgia",serif;
	color:#262626;
	text-transform:uppercase;
	font-weight:bold;}
h2
	{mso-style-link:"Heading 2 Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:2.0pt;
	margin-left:0in;
	font-size:13.0pt;
	font-family:"Calibri",sans-serif;
	color:#1D824C;
	text-transform:uppercase;
	font-weight:bold;}
h3
	{mso-style-link:"Heading 3 Char";
	margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;
	text-transform:uppercase;
	font-weight:bold;}
h4
	{mso-style-link:"Heading 4 Char";
	margin-top:2.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:0in;
	margin-bottom:.0001pt;
	page-break-after:avoid;
	font-size:11.0pt;
	font-family:"Georgia",serif;
	color:#156138;
	font-weight:normal;
	font-style:italic;}
h5
	{mso-style-link:"Heading 5 Char";
	margin-top:2.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:0in;
	margin-bottom:.0001pt;
	page-break-after:avoid;
	font-size:11.0pt;
	font-family:"Georgia",serif;
	color:#156138;
	font-weight:normal;}
h6
	{mso-style-link:"Heading 6 Char";
	margin-top:2.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:0in;
	margin-bottom:.0001pt;
	page-break-after:avoid;
	font-size:11.0pt;
	font-family:"Georgia",serif;
	color:#0E4025;
	font-weight:normal;}
p.MsoHeading7, li.MsoHeading7, div.MsoHeading7
	{mso-style-link:"Heading 7 Char";
	margin-top:2.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:0in;
	margin-bottom:.0001pt;
	page-break-after:avoid;
	font-size:11.0pt;
	font-family:"Georgia",serif;
	color:#0E4025;
	font-style:italic;}
p.MsoHeading8, li.MsoHeading8, div.MsoHeading8
	{mso-style-link:"Heading 8 Char";
	margin-top:2.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:0in;
	margin-bottom:.0001pt;
	page-break-after:avoid;
	font-size:11.0pt;
	font-family:"Georgia",serif;
	color:windowtext;
	font-weight:bold;}
p.MsoHeading9, li.MsoHeading9, div.MsoHeading9
	{mso-style-link:"Heading 9 Char";
	margin-top:2.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:0in;
	margin-bottom:.0001pt;
	page-break-after:avoid;
	font-size:11.0pt;
	font-family:"Georgia",serif;
	color:windowtext;
	font-weight:bold;
	font-style:italic;}
p.MsoIndex1, li.MsoIndex1, div.MsoIndex1
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:11.0pt;
	margin-bottom:.0001pt;
	text-indent:-11.0pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoIndex2, li.MsoIndex2, div.MsoIndex2
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:22.0pt;
	margin-bottom:.0001pt;
	text-indent:-11.0pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoIndex3, li.MsoIndex3, div.MsoIndex3
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:33.0pt;
	margin-bottom:.0001pt;
	text-indent:-11.0pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoIndex4, li.MsoIndex4, div.MsoIndex4
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:44.0pt;
	margin-bottom:.0001pt;
	text-indent:-11.0pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoIndex5, li.MsoIndex5, div.MsoIndex5
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:55.0pt;
	margin-bottom:.0001pt;
	text-indent:-11.0pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoIndex6, li.MsoIndex6, div.MsoIndex6
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:66.0pt;
	margin-bottom:.0001pt;
	text-indent:-11.0pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoIndex7, li.MsoIndex7, div.MsoIndex7
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:77.0pt;
	margin-bottom:.0001pt;
	text-indent:-11.0pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoIndex8, li.MsoIndex8, div.MsoIndex8
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:88.0pt;
	margin-bottom:.0001pt;
	text-indent:-11.0pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoIndex9, li.MsoIndex9, div.MsoIndex9
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:99.0pt;
	margin-bottom:.0001pt;
	text-indent:-11.0pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoToc1, li.MsoToc1, div.MsoToc1
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:5.0pt;
	margin-left:0in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoToc2, li.MsoToc2, div.MsoToc2
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:5.0pt;
	margin-left:11.0pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoToc3, li.MsoToc3, div.MsoToc3
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:5.0pt;
	margin-left:22.0pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoToc4, li.MsoToc4, div.MsoToc4
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:5.0pt;
	margin-left:33.0pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoToc5, li.MsoToc5, div.MsoToc5
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:5.0pt;
	margin-left:44.0pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoToc6, li.MsoToc6, div.MsoToc6
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:5.0pt;
	margin-left:55.0pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoToc7, li.MsoToc7, div.MsoToc7
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:5.0pt;
	margin-left:66.0pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoToc8, li.MsoToc8, div.MsoToc8
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:5.0pt;
	margin-left:77.0pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoToc9, li.MsoToc9, div.MsoToc9
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:5.0pt;
	margin-left:88.0pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoNormalIndent, li.MsoNormalIndent, div.MsoNormalIndent
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoFootnoteText, li.MsoFootnoteText, div.MsoFootnoteText
	{mso-style-link:"Footnote Text Char";
	margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoCommentText, li.MsoCommentText, div.MsoCommentText
	{mso-style-link:"Comment Text Char";
	margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoHeader, li.MsoHeader, div.MsoHeader
	{mso-style-link:"Header Char";
	margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoFooter, li.MsoFooter, div.MsoFooter
	{mso-style-link:"Footer Char";
	margin:0in;
	margin-bottom:.0001pt;
	text-align:center;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoIndexHeading, li.MsoIndexHeading, div.MsoIndexHeading
	{margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Georgia",serif;
	color:#595959;
	font-weight:bold;}
p.MsoCaption, li.MsoCaption, div.MsoCaption
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:10.0pt;
	margin-left:0in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#161616;
	font-style:italic;}
p.MsoTof, li.MsoTof, div.MsoTof
	{margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoEnvelopeAddress, li.MsoEnvelopeAddress, div.MsoEnvelopeAddress
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:2.0in;
	margin-bottom:.0001pt;
	font-size:12.0pt;
	font-family:"Georgia",serif;
	color:#595959;}
p.MsoEnvelopeReturn, li.MsoEnvelopeReturn, div.MsoEnvelopeReturn
	{margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Georgia",serif;
	color:#595959;}
span.MsoFootnoteReference
	{vertical-align:super;}
span.MsoEndnoteReference
	{vertical-align:super;}
p.MsoEndnoteText, li.MsoEndnoteText, div.MsoEndnoteText
	{mso-style-link:"Endnote Text Char";
	margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoToa, li.MsoToa, div.MsoToa
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:11.0pt;
	margin-bottom:.0001pt;
	text-indent:-11.0pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoMacroText, li.MsoMacroText, div.MsoMacroText
	{mso-style-link:"Macro Text Char";
	margin-top:4.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:Consolas;
	color:#0E4125;
	font-weight:bold;}
p.MsoToaHeading, li.MsoToaHeading, div.MsoToaHeading
	{margin-top:6.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:0in;
	margin-bottom:.0001pt;
	font-size:12.0pt;
	font-family:"Georgia",serif;
	color:#595959;
	font-weight:bold;}
p.MsoList, li.MsoList, div.MsoList
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListCxSpFirst, li.MsoListCxSpFirst, div.MsoListCxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListCxSpMiddle, li.MsoListCxSpMiddle, div.MsoListCxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListCxSpLast, li.MsoListCxSpLast, div.MsoListCxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListBullet, li.MsoListBullet, div.MsoListBullet
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumber, li.MsoListNumber, div.MsoListNumber
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumberCxSpFirst, li.MsoListNumberCxSpFirst, div.MsoListNumberCxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumberCxSpMiddle, li.MsoListNumberCxSpMiddle, div.MsoListNumberCxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumberCxSpLast, li.MsoListNumberCxSpLast, div.MsoListNumberCxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoList2, li.MsoList2, div.MsoList2
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoList2CxSpFirst, li.MsoList2CxSpFirst, div.MsoList2CxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoList2CxSpMiddle, li.MsoList2CxSpMiddle, div.MsoList2CxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoList2CxSpLast, li.MsoList2CxSpLast, div.MsoList2CxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoList3, li.MsoList3, div.MsoList3
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.75in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoList3CxSpFirst, li.MsoList3CxSpFirst, div.MsoList3CxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.75in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoList3CxSpMiddle, li.MsoList3CxSpMiddle, div.MsoList3CxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.75in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoList3CxSpLast, li.MsoList3CxSpLast, div.MsoList3CxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.75in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoList4, li.MsoList4, div.MsoList4
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.0in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoList4CxSpFirst, li.MsoList4CxSpFirst, div.MsoList4CxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.0in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoList4CxSpMiddle, li.MsoList4CxSpMiddle, div.MsoList4CxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.0in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoList4CxSpLast, li.MsoList4CxSpLast, div.MsoList4CxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.0in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoList5, li.MsoList5, div.MsoList5
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoList5CxSpFirst, li.MsoList5CxSpFirst, div.MsoList5CxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoList5CxSpMiddle, li.MsoList5CxSpMiddle, div.MsoList5CxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoList5CxSpLast, li.MsoList5CxSpLast, div.MsoList5CxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListBullet3, li.MsoListBullet3, div.MsoListBullet3
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.75in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListBullet3CxSpFirst, li.MsoListBullet3CxSpFirst, div.MsoListBullet3CxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.75in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListBullet3CxSpMiddle, li.MsoListBullet3CxSpMiddle, div.MsoListBullet3CxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.75in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListBullet3CxSpLast, li.MsoListBullet3CxSpLast, div.MsoListBullet3CxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.75in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListBullet4, li.MsoListBullet4, div.MsoListBullet4
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.0in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListBullet4CxSpFirst, li.MsoListBullet4CxSpFirst, div.MsoListBullet4CxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.0in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListBullet4CxSpMiddle, li.MsoListBullet4CxSpMiddle, div.MsoListBullet4CxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.0in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListBullet4CxSpLast, li.MsoListBullet4CxSpLast, div.MsoListBullet4CxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.0in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListBullet5, li.MsoListBullet5, div.MsoListBullet5
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListBullet5CxSpFirst, li.MsoListBullet5CxSpFirst, div.MsoListBullet5CxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListBullet5CxSpMiddle, li.MsoListBullet5CxSpMiddle, div.MsoListBullet5CxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListBullet5CxSpLast, li.MsoListBullet5CxSpLast, div.MsoListBullet5CxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumber2, li.MsoListNumber2, div.MsoListNumber2
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumber2CxSpFirst, li.MsoListNumber2CxSpFirst, div.MsoListNumber2CxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumber2CxSpMiddle, li.MsoListNumber2CxSpMiddle, div.MsoListNumber2CxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumber2CxSpLast, li.MsoListNumber2CxSpLast, div.MsoListNumber2CxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumber3, li.MsoListNumber3, div.MsoListNumber3
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.75in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumber3CxSpFirst, li.MsoListNumber3CxSpFirst, div.MsoListNumber3CxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.75in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumber3CxSpMiddle, li.MsoListNumber3CxSpMiddle, div.MsoListNumber3CxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.75in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumber3CxSpLast, li.MsoListNumber3CxSpLast, div.MsoListNumber3CxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.75in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumber4, li.MsoListNumber4, div.MsoListNumber4
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.0in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumber4CxSpFirst, li.MsoListNumber4CxSpFirst, div.MsoListNumber4CxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.0in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumber4CxSpMiddle, li.MsoListNumber4CxSpMiddle, div.MsoListNumber4CxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.0in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumber4CxSpLast, li.MsoListNumber4CxSpLast, div.MsoListNumber4CxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.0in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumber5, li.MsoListNumber5, div.MsoListNumber5
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumber5CxSpFirst, li.MsoListNumber5CxSpFirst, div.MsoListNumber5CxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumber5CxSpMiddle, li.MsoListNumber5CxSpMiddle, div.MsoListNumber5CxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListNumber5CxSpLast, li.MsoListNumber5CxSpLast, div.MsoListNumber5CxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.25in;
	margin-bottom:.0001pt;
	text-indent:-.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoTitle, li.MsoTitle, div.MsoTitle
	{mso-style-link:"Title Char";
	margin:0in;
	margin-bottom:.0001pt;
	text-align:center;
	font-size:35.0pt;
	font-family:"Georgia",serif;
	color:#595959;
	text-transform:uppercase;}
p.MsoTitleCxSpFirst, li.MsoTitleCxSpFirst, div.MsoTitleCxSpFirst
	{mso-style-link:"Title Char";
	margin:0in;
	margin-bottom:.0001pt;
	text-align:center;
	font-size:35.0pt;
	font-family:"Georgia",serif;
	color:#595959;
	text-transform:uppercase;}
p.MsoTitleCxSpMiddle, li.MsoTitleCxSpMiddle, div.MsoTitleCxSpMiddle
	{mso-style-link:"Title Char";
	margin:0in;
	margin-bottom:.0001pt;
	text-align:center;
	font-size:35.0pt;
	font-family:"Georgia",serif;
	color:#595959;
	text-transform:uppercase;}
p.MsoTitleCxSpLast, li.MsoTitleCxSpLast, div.MsoTitleCxSpLast
	{mso-style-link:"Title Char";
	margin:0in;
	margin-bottom:.0001pt;
	text-align:center;
	font-size:35.0pt;
	font-family:"Georgia",serif;
	color:#595959;
	text-transform:uppercase;}
p.MsoClosing, li.MsoClosing, div.MsoClosing
	{mso-style-link:"Closing Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:3.0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoSignature, li.MsoSignature, div.MsoSignature
	{mso-style-link:"Signature Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:3.0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoBodyText, li.MsoBodyText, div.MsoBodyText
	{mso-style-link:"Body Text Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:0in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoBodyTextIndent, li.MsoBodyTextIndent, div.MsoBodyTextIndent
	{mso-style-link:"Body Text Indent Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinue, li.MsoListContinue, div.MsoListContinue
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinueCxSpFirst, li.MsoListContinueCxSpFirst, div.MsoListContinueCxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.25in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinueCxSpMiddle, li.MsoListContinueCxSpMiddle, div.MsoListContinueCxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.25in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinueCxSpLast, li.MsoListContinueCxSpLast, div.MsoListContinueCxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinue2, li.MsoListContinue2, div.MsoListContinue2
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:.5in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinue2CxSpFirst, li.MsoListContinue2CxSpFirst, div.MsoListContinue2CxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinue2CxSpMiddle, li.MsoListContinue2CxSpMiddle, div.MsoListContinue2CxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinue2CxSpLast, li.MsoListContinue2CxSpLast, div.MsoListContinue2CxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:.5in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinue3, li.MsoListContinue3, div.MsoListContinue3
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:.75in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinue3CxSpFirst, li.MsoListContinue3CxSpFirst, div.MsoListContinue3CxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.75in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinue3CxSpMiddle, li.MsoListContinue3CxSpMiddle, div.MsoListContinue3CxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.75in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinue3CxSpLast, li.MsoListContinue3CxSpLast, div.MsoListContinue3CxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:.75in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinue4, li.MsoListContinue4, div.MsoListContinue4
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:1.0in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinue4CxSpFirst, li.MsoListContinue4CxSpFirst, div.MsoListContinue4CxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinue4CxSpMiddle, li.MsoListContinue4CxSpMiddle, div.MsoListContinue4CxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinue4CxSpLast, li.MsoListContinue4CxSpLast, div.MsoListContinue4CxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:1.0in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinue5, li.MsoListContinue5, div.MsoListContinue5
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:1.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinue5CxSpFirst, li.MsoListContinue5CxSpFirst, div.MsoListContinue5CxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.25in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinue5CxSpMiddle, li.MsoListContinue5CxSpMiddle, div.MsoListContinue5CxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:1.25in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListContinue5CxSpLast, li.MsoListContinue5CxSpLast, div.MsoListContinue5CxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:1.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoMessageHeader, li.MsoMessageHeader, div.MsoMessageHeader
	{mso-style-link:"Message Header Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.75in;
	margin-bottom:.0001pt;
	text-indent:-.75in;
	background:#CCCCCC;
	border:none;
	padding:0in;
	font-size:12.0pt;
	font-family:"Georgia",serif;
	color:#595959;}
p.MsoSubtitle, li.MsoSubtitle, div.MsoSubtitle
	{mso-style-link:"Subtitle Char";
	margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#5A5A5A;}
p.MsoSalutation, li.MsoSalutation, div.MsoSalutation
	{mso-style-link:"Salutation Char";
	margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoDate, li.MsoDate, div.MsoDate
	{mso-style-link:"Date Char";
	margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoBodyTextFirstIndent, li.MsoBodyTextFirstIndent, div.MsoBodyTextFirstIndent
	{mso-style-link:"Body Text First Indent Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	text-indent:.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoBodyTextFirstIndent2, li.MsoBodyTextFirstIndent2, div.MsoBodyTextFirstIndent2
	{mso-style-link:"Body Text First Indent 2 Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:.25in;
	text-indent:.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoNoteHeading, li.MsoNoteHeading, div.MsoNoteHeading
	{mso-style-link:"Note Heading Char";
	margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoBodyText2, li.MsoBodyText2, div.MsoBodyText2
	{mso-style-link:"Body Text 2 Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:0in;
	line-height:200%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoBodyText3, li.MsoBodyText3, div.MsoBodyText3
	{mso-style-link:"Body Text 3 Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:0in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoBodyTextIndent2, li.MsoBodyTextIndent2, div.MsoBodyTextIndent2
	{mso-style-link:"Body Text Indent 2 Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:.25in;
	line-height:200%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoBodyTextIndent3, li.MsoBodyTextIndent3, div.MsoBodyTextIndent3
	{mso-style-link:"Body Text Indent 3 Char";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:6.0pt;
	margin-left:.25in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoBlockText, li.MsoBlockText, div.MsoBlockText
	{margin-top:0in;
	margin-right:.8in;
	margin-bottom:0in;
	margin-left:.8in;
	margin-bottom:.0001pt;
	border:none;
	padding:0in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#1D824C;
	font-style:italic;}
a:link, span.MsoHyperlink
	{color:#2C5C85;
	text-decoration:underline;}
a:visited, span.MsoHyperlinkFollowed
	{color:#BF4A27;
	text-decoration:underline;}
p.MsoDocumentMap, li.MsoDocumentMap, div.MsoDocumentMap
	{mso-style-link:"Document Map Char";
	margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Segoe UI",sans-serif;
	color:#595959;}
p.MsoPlainText, li.MsoPlainText, div.MsoPlainText
	{mso-style-link:"Plain Text Char";
	margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:Consolas;
	color:#595959;}
p.MsoAutoSig, li.MsoAutoSig, div.MsoAutoSig
	{mso-style-link:"E-mail Signature Char";
	margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p
	{margin:0in;
	margin-bottom:.0001pt;
	font-size:12.0pt;
	font-family:"Times New Roman",serif;
	color:#595959;}
address
	{mso-style-link:"HTML Address Char";
	margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;
	font-style:italic;}
code
	{font-family:Consolas;}
kbd
	{font-family:Consolas;}
pre
	{mso-style-link:"HTML Preformatted Char";
	margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:Consolas;
	color:#595959;}
samp
	{font-family:Consolas;}
tt
	{font-family:Consolas;}
p.MsoCommentSubject, li.MsoCommentSubject, div.MsoCommentSubject
	{mso-style-link:"Comment Subject Char";
	margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;
	font-weight:bold;}
p.MsoAcetate, li.MsoAcetate, div.MsoAcetate
	{mso-style-link:"Balloon Text Char";
	margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Segoe UI",sans-serif;
	color:#595959;}
span.MsoPlaceholderText
	{color:#595959;}
p.MsoNoSpacing, li.MsoNoSpacing, div.MsoNoSpacing
	{margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoQuote, li.MsoQuote, div.MsoQuote
	{mso-style-link:"Quote Char";
	margin-top:10.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:0in;
	margin-bottom:.0001pt;
	text-align:center;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#404040;
	font-style:italic;}
p.MsoIntenseQuote, li.MsoIntenseQuote, div.MsoIntenseQuote
	{mso-style-link:"Intense Quote Char";
	margin-top:.25in;
	margin-right:0in;
	margin-bottom:.25in;
	margin-left:0in;
	text-align:center;
	border:none;
	padding:0in;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#1D824C;
	font-style:italic;}
span.MsoSubtleEmphasis
	{color:#404040;
	font-style:italic;}
span.MsoIntenseEmphasis
	{color:#262626;
	font-weight:bold;}
span.MsoSubtleReference
	{font-variant:small-caps;
	color:#595959;
	text-transform:none;
	font-weight:bold;}
span.MsoBookTitle
	{letter-spacing:0pt;
	font-weight:bold;
	font-style:italic;}
p.MsoBibliography, li.MsoBibliography, div.MsoBibliography
	{margin:0in;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
p.MsoTocHeading, li.MsoTocHeading, div.MsoTocHeading
	{margin-top:20.0pt;
	margin-right:0in;
	margin-bottom:10.0pt;
	margin-left:0in;
	page-break-after:avoid;
	font-size:14.0pt;
	font-family:"Georgia",serif;
	color:#262626;
	text-transform:uppercase;
	font-weight:bold;}
p.MsoTocHeadingCxSpFirst, li.MsoTocHeadingCxSpFirst, div.MsoTocHeadingCxSpFirst
	{margin-top:20.0pt;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:0in;
	margin-bottom:.0001pt;
	page-break-after:avoid;
	font-size:14.0pt;
	font-family:"Georgia",serif;
	color:#262626;
	text-transform:uppercase;
	font-weight:bold;}
p.MsoTocHeadingCxSpMiddle, li.MsoTocHeadingCxSpMiddle, div.MsoTocHeadingCxSpMiddle
	{margin:0in;
	margin-bottom:.0001pt;
	page-break-after:avoid;
	font-size:14.0pt;
	font-family:"Georgia",serif;
	color:#262626;
	text-transform:uppercase;
	font-weight:bold;}
p.MsoTocHeadingCxSpLast, li.MsoTocHeadingCxSpLast, div.MsoTocHeadingCxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:10.0pt;
	margin-left:0in;
	page-break-after:avoid;
	font-size:14.0pt;
	font-family:"Georgia",serif;
	color:#262626;
	text-transform:uppercase;
	font-weight:bold;}
span.MacroTextChar
	{mso-style-name:"Macro Text Char";
	mso-style-link:"Macro Text";
	font-family:Consolas;
	color:#0E4125;
	font-weight:bold;}
span.TitleChar
	{mso-style-name:"Title Char";
	mso-style-link:Title;
	font-family:"Georgia",serif;
	text-transform:uppercase;}
span.HeaderChar
	{mso-style-name:"Header Char";
	mso-style-link:Header;}
span.FooterChar
	{mso-style-name:"Footer Char";
	mso-style-link:Footer;}
p.ContactInfo, li.ContactInfo, div.ContactInfo
	{mso-style-name:"Contact Info";
	margin:0in;
	margin-bottom:.0001pt;
	text-align:center;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#595959;}
span.Heading1Char
	{mso-style-name:"Heading 1 Char";
	mso-style-link:"Heading 1";
	font-family:"Georgia",serif;
	color:#262626;
	text-transform:uppercase;
	font-weight:bold;}
span.Heading2Char
	{mso-style-name:"Heading 2 Char";
	mso-style-link:"Heading 2";
	font-family:"Times New Roman",serif;
	color:#1D824C;
	text-transform:uppercase;
	font-weight:bold;}
span.Heading3Char
	{mso-style-name:"Heading 3 Char";
	mso-style-link:"Heading 3";
	font-family:"Times New Roman",serif;
	text-transform:uppercase;
	font-weight:bold;}
span.Heading4Char
	{mso-style-name:"Heading 4 Char";
	mso-style-link:"Heading 4";
	font-family:"Georgia",serif;
	color:#156138;
	font-style:italic;}
span.Heading8Char
	{mso-style-name:"Heading 8 Char";
	mso-style-link:"Heading 8";
	font-family:"Georgia",serif;
	color:windowtext;
	font-weight:bold;}
span.Heading9Char
	{mso-style-name:"Heading 9 Char";
	mso-style-link:"Heading 9";
	font-family:"Georgia",serif;
	color:windowtext;
	font-weight:bold;
	font-style:italic;}
span.QuoteChar
	{mso-style-name:"Quote Char";
	mso-style-link:Quote;
	color:#404040;
	font-style:italic;}
span.IntenseQuoteChar
	{mso-style-name:"Intense Quote Char";
	mso-style-link:"Intense Quote";
	color:#1D824C;
	font-style:italic;}
span.SubtitleChar
	{mso-style-name:"Subtitle Char";
	mso-style-link:Subtitle;
	font-family:"Times New Roman",serif;
	color:#5A5A5A;}
span.BalloonTextChar
	{mso-style-name:"Balloon Text Char";
	mso-style-link:"Balloon Text";
	font-family:"Segoe UI",sans-serif;}
span.BodyText3Char
	{mso-style-name:"Body Text 3 Char";
	mso-style-link:"Body Text 3";}
span.BodyTextIndent3Char
	{mso-style-name:"Body Text Indent 3 Char";
	mso-style-link:"Body Text Indent 3";}
span.CommentTextChar
	{mso-style-name:"Comment Text Char";
	mso-style-link:"Comment Text";}
span.CommentSubjectChar
	{mso-style-name:"Comment Subject Char";
	mso-style-link:"Comment Subject";
	font-weight:bold;}
span.DocumentMapChar
	{mso-style-name:"Document Map Char";
	mso-style-link:"Document Map";
	font-family:"Segoe UI",sans-serif;}
span.EndnoteTextChar
	{mso-style-name:"Endnote Text Char";
	mso-style-link:"Endnote Text";}
span.FootnoteTextChar
	{mso-style-name:"Footnote Text Char";
	mso-style-link:"Footnote Text";}
span.HTMLPreformattedChar
	{mso-style-name:"HTML Preformatted Char";
	mso-style-link:"HTML Preformatted";
	font-family:Consolas;}
span.PlainTextChar
	{mso-style-name:"Plain Text Char";
	mso-style-link:"Plain Text";
	font-family:Consolas;}
span.Heading7Char
	{mso-style-name:"Heading 7 Char";
	mso-style-link:"Heading 7";
	font-family:"Georgia",serif;
	color:#0E4025;
	font-style:italic;}
span.BodyTextChar
	{mso-style-name:"Body Text Char";
	mso-style-link:"Body Text";}
span.BodyText2Char
	{mso-style-name:"Body Text 2 Char";
	mso-style-link:"Body Text 2";}
span.BodyTextFirstIndentChar
	{mso-style-name:"Body Text First Indent Char";
	mso-style-link:"Body Text First Indent";}
span.BodyTextIndentChar
	{mso-style-name:"Body Text Indent Char";
	mso-style-link:"Body Text Indent";}
span.BodyTextFirstIndent2Char
	{mso-style-name:"Body Text First Indent 2 Char";
	mso-style-link:"Body Text First Indent 2";}
span.BodyTextIndent2Char
	{mso-style-name:"Body Text Indent 2 Char";
	mso-style-link:"Body Text Indent 2";}
span.ClosingChar
	{mso-style-name:"Closing Char";
	mso-style-link:Closing;}
span.DateChar
	{mso-style-name:"Date Char";
	mso-style-link:Date;}
span.E-mailSignatureChar
	{mso-style-name:"E-mail Signature Char";
	mso-style-link:"E-mail Signature";}
span.Heading5Char
	{mso-style-name:"Heading 5 Char";
	mso-style-link:"Heading 5";
	font-family:"Georgia",serif;
	color:#156138;}
span.Heading6Char
	{mso-style-name:"Heading 6 Char";
	mso-style-link:"Heading 6";
	font-family:"Georgia",serif;
	color:#0E4025;}
span.HTMLAddressChar
	{mso-style-name:"HTML Address Char";
	mso-style-link:"HTML Address";
	font-style:italic;}
span.MessageHeaderChar
	{mso-style-name:"Message Header Char";
	mso-style-link:"Message Header";
	font-family:"Georgia",serif;
	background:#CCCCCC;}
span.NoteHeadingChar
	{mso-style-name:"Note Heading Char";
	mso-style-link:"Note Heading";}
span.SalutationChar
	{mso-style-name:"Salutation Char";
	mso-style-link:Salutation;}
span.SignatureChar
	{mso-style-name:"Signature Char";
	mso-style-link:Signature;}
p.ContactInfoEmphasis, li.ContactInfoEmphasis, div.ContactInfoEmphasis
	{mso-style-name:"Contact Info Emphasis";
	margin:0in;
	margin-bottom:.0001pt;
	text-align:center;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	color:#1D824C;
	font-weight:bold;}
.MsoChpDefault
	{font-family:"Calibri",sans-serif;
	color:#595959;}
 /* Page Definitions */
 @page WordSection1
	{size:8.5in 11.0in;
	margin:47.5pt 1.0in .75in 1.0in;}
div.WordSection1
	{page:WordSection1;}
 /* List Definitions */
 ol
	{margin-bottom:0in;}
ul
	{margin-bottom:0in;}
-->
</style>
       </head>
       <body>
          <div class="WordSection1">
          
          <table class=MsoTableGrid border=0 cellspacing=0 cellpadding=0
 summary="Layout table for name, contact info, and objective" width="100%"
 style='width:100.0%;border-collapse:collapse'>
 <tr style='height:1.25in'>
  <td width=624 valign=top style='width:6.5in;padding:0in 0in 0in 0in;
  height:1.25in'>
  <p class=MsoTitle>${name}</span></p>
  <p class=ContactInfo>${location} | ${phone}</p>
  <p class=ContactInfoEmphasis>${email}</p>
  </td>
 </tr>
 <tr>
  <td width=624 valign=top style='width:6.5in;padding:.3in 0in 5.75pt 0in'>
  <p class=MsoNormal>${summary}</p>
  </td>
 </tr>
</table>

<h1>Work Experience</h1>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 summary="Experience layout table" width="99%" style='width:99.5%;margin-left:
 .05in;border-collapse:collapse;border:none'>
 <tr>
  <td width=624 valign=top style='width:467.75pt;border:none;border-left:dotted #BFBFBF 2.25pt;
  padding:0in 0in 0in .4in'>
  <h3>${startDateJob} - ${endDateJob} </h3>
  <h2>${jobTitle}, <span class=MsoSubtleReference><span style='font-variant:normal !important;
  color:windowtext;text-transform:uppercase;font-weight:normal'>${company}</span></span></h2>
  <p class=MsoNormal>${jobDescription}</p>
  </td>
 </tr>
 <tr>
  <td width=624 valign=top style='width:467.75pt;border:none;border-left:dotted #BFBFBF 2.25pt;
  padding:.15in 0in 0in .4in'>
  <h3>${startDateJob2} - ${endDateJob2}</h3>
  <h2>${jobTitle2},<span class=MsoSubtleReference><span style='font-variant:normal !important;
  color:windowtext;text-transform:uppercase;font-weight:normal'>${company}</span></span></h2>
  <p class=MsoNormalCxSpFirst>${jobDescription}</p>
  </td>
 </tr>
</table>

<h1>Education</h1>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 summary="Education layout table" width="99%" style='width:99.5%;margin-left:
 .05in;border-collapse:collapse;border:none'>
 <tr>
  <td width=624 valign=top style='width:467.75pt;border:none;border-left:dotted #BFBFBF 2.25pt;
  padding:0in 0in 0in .4in'>
  <h3>${startDateEducation} - ${endDateEducation}</h3>
  <h2>${degree}: ${major}  <span class=MsoSubtleReference><span style='font-variant:
  normal !important;color:windowtext;text-transform:uppercase;font-weight:normal'>  - ${school}</span></span></h2>
  <p class=MsoNormal>${schoolLocation}</p>
  <p class=MsoNormal>GPA: ${gpa}</p>
  </td>
 </tr>
 <tr>
  <td width=624 valign=top style='width:467.75pt;border:none;border-left:dotted #BFBFBF 2.25pt;
  padding:.15in 0in 0in .4in'>
  <h3>${startDateEducation2} - ${endDateEducation2}</h3>
  <h2>${degree2}: ${major2}  <span class=MsoSubtleReference><span style='font-variant:
  normal !important;color:windowtext;text-transform:uppercase;font-weight:normal'>  - ${school2}</span></span></h2>
  <p class=MsoNormalCxSpFirst>${schoolLocation2}</p>
  <p class=MsoNormal>GPA: ${gpa2}</p>
  </td>
 </tr>
</table>

<h1>Skills</h1>

<table class=MsoTableGrid border=0 cellspacing=0 cellpadding=0
 summary="Skills layout table" width="100%" style='width:100.0%;border-collapse:
 collapse'>
 <tr>
  <td width=312 valign=top style='width:233.75pt;padding:0in 0in 0in 0in'>
  <p class=MsoListBullet><span style='font-size:12.0pt;font-family:Symbol;
  color:#1D824C'>•<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span>${skill1}</p>
  <p class=MsoListBullet><span style='font-size:12.0pt;font-family:Symbol;
  color:#1D824C'>•<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span>${skill2}</p>
   <p class=MsoListBullet><span style='font-size:12.0pt;font-family:Symbol;
  color:#1D824C'>•<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span>${skill3}</p>
  </td>
 </tr>
</table>

<h1>Activities</h1>

<p class=MsoNormal>${activities}</p>
      
           
          </div>
       </body>
    </html>
    `;
};