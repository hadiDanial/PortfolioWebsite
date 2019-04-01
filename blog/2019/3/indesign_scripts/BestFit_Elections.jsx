var myDocument;
var tempObjStyle;
var theFile;
var nameAddition;
var pages;
var dialog;
var rb4, rb5, rb6, rb7, rb8;
var UIresult = myDisplayDialog();  
var ind = 0;
  
if (UIresult.rb[0]){nameAddition = "_21x30"; createDocument("210", "300");}  
if (UIresult.rb[1]){nameAddition = "_30x42"; createDocument("420", "300");}  
if (UIresult.rb[2]){nameAddition = "_A4"; createDocument("297", "210");}  
if (UIresult.rb[3]){pages = 1; }
if (UIresult.rb[5]){pages = 50; }
if (UIresult.rb[6]){pages = 100; }

function createDocument(docWidth,docHeight)  
{  
    app.pdfPlacePreferences.pdfCrop = PDFCrop.cropMedia;
    if(multiPage.value)
    {
        createDocuments(docWidth,docHeight)  ;
     }
 else 
    {
        myDocument = app.documents.add();  
        with(myDocument.documentPreferences){  
        pageHeight = docHeight + "mm";  
        pageWidth = docWidth + "mm";  
        pagesPerDocument = 1;}  
    ind = 1;
        placePage();
    }
}

function createDocuments(docWidth,docHeight)  
{  
    ind = 1;
    var num = getPDFPageCount(theFile);
    for(var i=1; i<=  num; i++)
    {
        ind = i;
        app.pdfPlacePreferences.pageNumber = ind;
        myDocument = app.documents.add();  
        with(myDocument.documentPreferences){  
        pageHeight = docHeight + "mm";  
        pageWidth = docWidth + "mm";  
        pagesPerDocument = 1;}  
        placePage();
        
     }
    
}

function placePage()  
    {

      if(useMaster.value == true)
        {
            PlacePage(myDocument.masterSpreads.item(0).pages[0]);
        }
        else
        {
            PlacePage(myDocument.pages[0]);
         }
																		
    }

 function PlacePage(myPage)
{

    //var myPDFPage = myDocument.pages[0];//.place(File(theFile), [0,0])[0];
    var w = myDocument.documentPreferences.pageWidth;
    var h = myDocument.documentPreferences.pageHeight;
    var pdfW = 70;
    var pdfH = 100;
    
    
    //Number of repeats
    var x = Math.floor(w/pdfW);
    var y = Math.floor (h/pdfH);
    
    var initX = (w - (x * pdfW))/2;
    var initY = (h - (y * pdfH))/2;
    
    if(rb4.value == true)
        {
            pages = 1;
         } else if(rb4.value == true)
        {
            pages = 25;
         } else if(rb5.value == true)
        {
            pages = 50;
         } else if(rb6.value == true)
        {
            pages = 100;
         }
     
        for(var i = 2; i <= pages; i++)
            myDocument.pages.add();
      
    
    for(var i = 0; i<x; i++)
    {
        for(var j = 0; j<y; j++)
        {
            app.pdfPlacePreferences.pageNumber = ind;
            var myPDFPage = myPage.place(File(theFile), [initX + i * pdfW, initY + j*pdfH],myDocument.activeLayer,false)[0];
        }
    }
    var myObj = new Array;
    myObj = app.activeWindow.activePage.pageItems;
    //app.activeWindow.activePage.groups.add(myObj);
    //app.activeDocument.distribute(myObj, DistributeOptions.HORIZONTAL_CENTERS, AlignDistributeBounds.SPREAD_BOUNDS);  
    
  if(exportCheck.value)
  ExportPDF();
}


function ExportPDF()
{
        app.activeDocument.exportFile(ExportFormat.pdfType, File("/Users/admin/Desktop/Elections 2018/"+theFile.name+nameAddition + "_" + ind + ".pdf"), false);
        app.activeDocument.close(SaveOptions.no);
}

  

function myDisplayDialog()  
   {  
       // Ask user to select the PDF/InDesign file to place
var askIt = "Select a PDF or InDesign file to place:";
if (File.fs =="Windows")
{
	 theFile = File.openDialog(askIt, "Placeable: *.indd;*.pdf");
}
else if (File.fs == "Macintosh")
{
	 theFile = File.openDialog(askIt, macFileFilter);
}
else
{
	 theFile = File.openDialog(askIt);
}
var myDialog = new Window ('dialog', 'Elections - Choose Size');  
        myDialog.alignChildren = "left";  
        var rg0 = myDialog.add ('group');  
        rg0.add('statictext',undefined, 'Select Size:');  
         var rb1 = rg0.add('radiobutton',undefined, '21x30');  
         var rb2 = rg0.add('radiobutton',undefined, '30x42');  
         var rb3 = rg0.add('radiobutton',undefined, 'A4');  
         rg0.add('statictext',undefined, 'mm');  
         rb2.value = true;  
         var rg1 = myDialog.add ('group');  
         var rg3 = myDialog.add ('group');  
         var rg2 = myDialog.add ('group');  
         rg3.alignment="left";
         rg3.add('statictext',undefined, 'Select Quantity:');  
          rb4 = rg3.add('radiobutton',undefined, '1');  
          rb5 = rg3.add('radiobutton',undefined, '50');  
          rb6 = rg3.add('radiobutton',undefined, '100'); 
         rb6.value = true;
         useMaster = rg2.add('checkbox', undefined,'Place on Master');
         useMaster.value = true;
        exportCheck = rg2.add('checkbox', undefined,'Auto Export and Close');
        exportCheck.value = true;
        multiPage = rg2.add('checkbox', undefined,'Multipage PDF');
        multiPage.value = true;
        //duplex = rg2.add('checkbox', undefined, 'Duplex?');
        var end = myDialog.add('group');
        end.add('statictext',undefined, 'By Hadi'); 
        end.alignment = "right";  
        end.add('button', undefined, 'Cancel', {name: 'cancel'});  
        end.add('button', undefined, 'OK', {name: 'ok'});  

var myResult = myDialog.show();  
dialog = myDialog;
if (myResult == 1)  
{  
     return {rb : [rb1.value, rb2.value, rb3.value, rb4.value, rb5.value, rb6.value]};  
}  
if (myResult == 2)  
{  
     exit();  
}  
       //PlacePage();
}  
  
 
 // File filter for the mac to only show indy and pdf files
function macFileFilter(fileToTest)
{ 
	if(fileToTest.name.indexOf(".pdf") > -1 || fileToTest.name.indexOf(".ind") > -1)
		return true; 		 
	else
		return false;	 
}


function getPDFPageCount(f) { 
 

 f.open ('r');

  var gotCount = false;

 while (! gotCount) {

  next_line = f.readln();

  if  ( f.eof ) {alert("Aborting the script\nWe've got to the end of the file without finding a page count");

   f.close();

   exit();

   }

  if (next_line.indexOf ('/N ') > 0) { // We've got the easy sort of PDF

   var p = next_line.match (/\/N (\d+)\/T/)[1];

   //alert("Found a '/N' style PDF, with "+p+" pages");

   gotCount = true;

   }

  else if  (next_line.indexOf ('/Pages>>') > 0 ) {  // We probably had to read nearly to the end of the file for the match...

   var p = next_line.match (/\/Count (\d+)\/K/)[1];

   //alert("Found a '/Count ... /Pages>>' style PDF, with "+p+" pages");

   gotCount = true;

   }

  }

 f.close ();

 return Number(p);

  }