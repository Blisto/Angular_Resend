import { Component } from '@angular/core';
import { ConnectService } from '../auth/alvis.service';
import * as FileSaver from 'file-saver';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  constructor(private Alvis:ConnectService){

  }
  fileNames:any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.Alvis.JSON資料表().subscribe((result:any)=>{
      if (result && result.Root) {
        // 現在可以安全地使用 map 方法
        this.fileNames = result.Root.DataPage.map((record: { Record: { fileName: any; }; }) => record.Record.fileName);
        this.fileNames.unshift('請選擇一個檔名');
      } else {
        // 處理數據未定義的情況
        console.error('DataPage is undefined');
      }
    });
  }

  selectedOption= 0;
  confirmBTN_disable=false;
  cancelBTN_disable=true;
  searchBTN_disable=true;
  getdataBTN_disable=true;

  elecNumTEXT="";
  returnName="";
  temp:any;

  confirmBTN(){
    if(this.selectedOption!=0){
      this.confirmBTN_disable=!this.confirmBTN_disable;
      this.cancelBTN_disable=!this.cancelBTN_disable;
      this.searchBTN_disable=!this.searchBTN_disable;
    }
  }

  searchBTN(){
    if(this.elecNumTEXT!="" && this.elecNumTEXT.length==11){
      const formData = new FormData();
      formData.append('ElecNum',this.elecNumTEXT);
      formData.append('FileName',this.fileNames[this.selectedOption]);
      this.Alvis.查電號(formData).subscribe((xmldata:any)=>{
        console.log(xmldata);
        console.log(xmldata.root.echo);
        this.returnName=xmldata.root.echo;//只有先做到有東西的結果 查無要再補充
        this.getdataBTN_disable=false;
      });
    }else{
      this.getdataBTN_disable=true;
      this.returnName="輸入格式錯誤";
    }
  }


  getDataBTN(){
    const selectFile = this.fileNames[this.selectedOption];
    const JFileName = selectFile.split(".")[0];
    const parts = JFileName.split("_");
    parts[1]=this.elecNumTEXT;
    const rawFileName = parts.join("_")+".txt";
    console.log(rawFileName);
    this.getdataBTN_disable=true;

    const formData = new FormData();
    formData.append('RawFilename',rawFileName);
    this.Alvis.取得ticket(formData).subscribe((response: Blob)=>{
    this.saveFile(response);
    });
  }

  apiBTN(){
    const formData = new FormData();

  }
  saveFile(blob: Blob) {
    FileSaver.saveAs(blob, this.elecNumTEXT+'.pdf'); // 替换 'filename.pdf' 为你想要的文件名
  }

}
