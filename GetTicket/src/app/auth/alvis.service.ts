import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// 經過此段service進行伺服器操作的時候都需要另建資料模型

@Injectable({
  providedIn: 'root'
})

export class ConnectService{
  private Ol_APIfileList="http://192.168.1.2:9090/fileList";
  private Ol_API_elecFileGet="http://192.168.1.2:9090/elecFileGet";
  private Ol_API_getTicket="http://192.168.1.2:9090/getTicket";

  constructor(private http:HttpClient) { }

  JSON資料表(){
    return this.http.get(this.Ol_APIfileList);
  }
  查電號(body:FormData){
    return this.http.post(this.Ol_API_elecFileGet,body);
  }
  取得ticket(body:FormData){
    return this.http.post(this.Ol_API_getTicket,body,{ responseType: 'blob' });
  }
}


export class LoginService {
  // 登入相關的功能由此進行
  private loginUrl="http://127.0.0.1:3000/api/user/Login";
  private accountListUrl="http://127.0.0.1:3000/api/user/retrievalAllAccount";
  private createAccountUrl="http://127.0.0.1:3000/api/user/createAccount";
  private jobListUrl="http://127.0.0.1:3000/api/job/alljobcard";
  private jobCreatUrl="http://127.0.0.1:3000/api/job/jobCreat";
  private testuploadUrl="http://127.0.0.1:3000/api/job/upload";
  private testuploadUrlS="http://127.0.0.1:3000/api/job/uploadSingle";
  private idTableUrl="http://127.0.0.1:3000/api/job/getPathID";
  private t="http://127.0.0.1:3000/api/job/select";

  private Ol_APItest="http://192.168.1.2:9090/function";

  constructor(private http:HttpClient) { }

  JWT登入(body:FormData){
    let headers = new HttpHeaders({'enctype':'multipart/form-data'});
    let option = {headers:headers};
    return this.http.post(this.loginUrl,body,option);
    // { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': 'http://localhost:4200' }), withCredentials: true }
  }

  取得所有使用者(){
    let headers = new HttpHeaders({'enctype':'multipart/form-data'});
    let option = {headers:headers};
    const body = new FormData();
    body.append('Account',sessionStorage.getItem('user')!);
    body.append('Token',sessionStorage.getItem('userToken')!);
    console.log('Alvis做事');
    return this.http.post(this.accountListUrl,body,option);
  }

  創建使用者(body:FormData){
    let headers = new HttpHeaders({'enctype':'multipart/form-data'});
    let option = {headers:headers};
    body.append('Account',sessionStorage.getItem('user')!);
    body.append('Token',sessionStorage.getItem('userToken')!);
    console.log(`創建使用者 查看輸入的資料:${body}`);
    return this.http.post(this.createAccountUrl,body,option);
  }

  取得作業列表(){
    let headers = new HttpHeaders({'enctype':'multipart/form-data'});
    let option = {headers:headers};
    const body = new FormData();
    body.append('Account',sessionStorage.getItem('user')!);
    body.append('Token',sessionStorage.getItem('userToken')!);
    return this.http.post(this.jobListUrl,body,option);
  }

  添加新作業(body:FormData){
    let headers = new HttpHeaders({'enctype':'multipart/form-data'});
    let option = {headers:headers};
    body.append('Account',sessionStorage.getItem('user')!);
    body.append('Token',sessionStorage.getItem('userToken')!);
    return this.http.post(this.jobCreatUrl,body,option);
  }

  上傳_多(file:FormData){
    let headers = new HttpHeaders({'enctype':'multipart/form-data'});
    let option = {headers:headers};
    file.append('Account',sessionStorage.getItem('user')!);
    file.append('Token',sessionStorage.getItem('userToken')!);
    console.log(`看一下上傳前的樣子:${file}`);
    return this.http.post(this.testuploadUrl,file,option);
  }
  上傳_單(file:FormData){
    let headers = new HttpHeaders({'enctype':'multipart/form-data'});
    let option = {headers:headers};
    file.append('Account',sessionStorage.getItem('user')!);
    file.append('Token',sessionStorage.getItem('userToken')!);
    console.log(`看一下上傳前的樣子:${file}`);
    return this.http.post(this.testuploadUrlS,file,option);
  }
  取得ID表(){
    return this.http.get(this.idTableUrl);
  }

  純測試(){
    const body = new FormData();
    body.append('elecnum','00010005006');
    body.append('elecnum','00010005040');
    body.append('elecnum','00010006109');
    body.append('elecnum','00010006303');
    body.append('elecnum','00010013006');
    body.append('elecnum','00010013017');
    body.append('elecnum','00010013028');
    body.append('elecnum','00010013040');
    body.append('elecnum','00010013062');
    body.append('elecnum','00010013073');
    body.append('elecnum','00010014109');
    body.append('elecnum','00010014201');
    body.append('elecnum','00010014564');
    body.append('elecnum','00010014906');
    body.append('elecnum','00010015008');
    body.append('elecnum','00010021006');
    body.append('elecnum','00010030007');
    body.append('elecnum','00010031008');
    body.append('elecnum','00010032009');
    body.append('elecnum','00010040009');
    body.append('elecnum','00010133090');
    body.append('elecnum','00010140204');
    body.append('elecnum','00010151071');
    body.append('elecnum','00010151106');
    body.append('elecnum','00010151208');
    body.append('elecnum','00010151505');
    body.append('elecnum','00010153200');
    body.append('elecnum','00010153302');
    body.append('elecnum','00010153609');
    body.append('elecnum','00010162508');
    body.append('elecnum','00010167206');
    body.append('elecnum','00010168207');
    body.append('elecnum','00010169402');
    body.append('elecnum','00010170109');
    body.append('elecnum','00010173408');
    body.append('elecnum','00010173692');
    body.append('elecnum','00010175079');
    body.append('elecnum','00010194072');
    body.append('elecnum','00010200309');
    body.append('elecnum','00010200401');
    body.append('elecnum','00010200708');
    body.append('elecnum','00010201208');
    body.append('elecnum','00010201300');
    body.append('elecnum','00010201709');
    body.append('elecnum','00010202301');
    body.append('elecnum','00010218309');
    body.append('elecnum','00010232078');
    body.append('elecnum','00010236301');
    body.append('elecnum','00010238109');
    body.append('elecnum','00010240103');
    body.append('elecnum','00010240205');
    body.append('elecnum','00010240307');
    body.append('elecnum','00010254100');
    body.append('elecnum','00010269209');
    body.append('elecnum','00010351095');
    body.append('elecnum','00010380307');
    body.append('elecnum','00010460020');
    body.append('elecnum','00010460075');
    body.append('elecnum','00010460941');
    body.append('elecnum','00010466925');
    body.append('elecnum','00010470102');
    body.append('elecnum','00010472605');
    body.append('elecnum','00010474300');
    body.append('elecnum','00010474709');
    body.append('elecnum','00010481105');
    body.append('elecnum','00010485109');
    body.append('elecnum','00010485201');
    body.append('elecnum','00010487203');
    body.append('elecnum','00010490093');
    body.append('elecnum','00010492404');
    body.append('elecnum','00010498104');
    body.append('elecnum','00010499092');
    body.append('elecnum','00010500028');
    body.append('elecnum','00010500108');
    body.append('elecnum','00010500200');
    body.append('elecnum','00010500302');
    body.append('elecnum','00010500507');
    body.append('elecnum','00010500701');
    body.append('elecnum','00010553077');
    body.append('elecnum','00010566107');
    body.append('elecnum','00010627075');
    body.append('elecnum','00010627100');
    body.append('elecnum','00010627122');
    body.append('elecnum','00010660102');
    body.append('elecnum','00010668097');
    body.append('elecnum','00010669101');
    body.append('elecnum','00010702099');
    body.append('elecnum','00010778078');
    body.append('elecnum','00010782109');
    body.append('elecnum','00010794078');
    body.append('elecnum','00010800032');
    body.append('elecnum','00010871209');
    body.append('elecnum','00010917101');
    body.append('elecnum','00010917305');
    body.append('elecnum','00010927307');
    body.append('elecnum','00010941691');
    body.append('elecnum','00010943103');
    body.append('elecnum','00010943604');
    body.append('elecnum','00010943922');
    body.append('elecnum','00010945105');
    body.append('elecnum','00010946106');
    body.append('elecnum','00010946505');
    body.append('elecnum','00010967204');
    body.append('elecnum','00010967306');
    body.append('elecnum','00010967408');
    body.append('elecnum','00010977104');
    body.append('elecnum','00010990098');
    body.append('elecnum','00011013406');
    body.append('elecnum','00011016205');
    body.append('elecnum','00011016307');
    body.append('elecnum','00011024001');
    body.append('elecnum','00011024205');
    body.append('elecnum','00011024307');
    body.append('elecnum','00011024409');
    body.append('elecnum','00011025091');
    body.append('elecnum','00011028094');
    body.append('elecnum','00011072204');
    body.append('elecnum','00011072501');
    body.append('elecnum','00011076106');
    body.append('elecnum','00011084505');
    body.append('elecnum','00011085403');
    body.append('elecnum','00011085608');
    body.append('elecnum','00011096304');
    body.append('elecnum','00011136006');
    body.append('elecnum','00011136302');
    body.append('elecnum','00011136404');
    body.append('elecnum','00011140308');
    body.append('elecnum','00011146100');
    body.append('elecnum','00011146304');
    body.append('elecnum','00011151073');
    body.append('elecnum','00011224207');
    body.append('elecnum','00011240207');
    body.append('elecnum','00011280104');
    body.append('elecnum','00011300073');
    body.append('elecnum','00011300404');
    body.append('elecnum','00011306079');
    body.append('elecnum','00011306308');
    body.append('elecnum','00011306400');
    body.append('elecnum','00011310406');
    body.append('elecnum','00011316106');
    body.append('elecnum','00011332071');
    body.append('elecnum','00011396205');
    body.append('elecnum','00011430309');
    body.append('elecnum','00011442405');
    body.append('elecnum','00011495409');
    body.append('elecnum','00011498300');
    body.append('elecnum','00011504707');
    body.append('elecnum','00011505025');
    body.append('elecnum','00011539401');
    body.append('elecnum','00011609941');
    body.append('elecnum','00011609963');
    body.append('elecnum','00011610922');
    body.append('elecnum','00011615108');
    body.append('elecnum','00011615698');
    body.append('elecnum','00011626691');
    body.append('elecnum','00011631200');
    body.append('elecnum','00011631767');
    body.append('elecnum','00011634964');
    body.append('elecnum','00011641985');
    body.append('elecnum','00011651103');
    body.append('elecnum','00011651966');
    body.append('elecnum','00011652809');
    body.append('elecnum','00011654925');
    body.append('elecnum','00011655700');
    body.append('elecnum','00011655926');
    body.append('elecnum','00011658907');
    body.append('elecnum','00011658985');
    body.append('elecnum','00011659964');
    body.append('elecnum','00011661025');
    body.append('elecnum','00011661309');
    body.append('elecnum','00011680073');
    body.append('elecnum','00011681074');
    body.append('elecnum','00011683098');
    body.append('elecnum','00011710079');
    body.append('elecnum','00011710206');
    body.append('elecnum','00011714028');
    body.append('elecnum','00011714108');
    body.append('elecnum','00011714609');
    body.append('elecnum','00011714698');
    body.append('elecnum','00011744104');
    body.append('elecnum','00011744206');
    body.append('elecnum','00011829208');
    body.append('elecnum','00011829300');
    body.append('elecnum','00011831202');
    body.append('elecnum','00011871074');
    body.append('elecnum','00011872075');
    body.append('elecnum','00011875034');
    body.append('elecnum','00011876024');
    body.append('elecnum','00011876079');
    body.append('elecnum','00011876694');
    body.append('elecnum','00011878082');
    body.append('elecnum','00011880086');
    body.append('elecnum','00011882088');
    body.append('elecnum','00011884080');
    body.append('elecnum','00011906509');
    body.append('elecnum','00011912200');
    body.append('elecnum','00011912302');
    return this.http.post(this.t,body);
  }

  OL測試APIs(file:FormData){
    // OL系統禁止使用自訂Headers
    // 會觸preflight request
    // 會觸發 preflight request 的條件（符合下列任一）
    // http method 非 GET, POST, HEAD
    // request header 包含非 user agent 自動設定的標頭（Accept, Accept-Language, Content-Type, etc）
    // Content-Type 非 text/plain, multipart/form-data 或 application/x-www-form-urlencoded
    file.append('DisplayPDFObj','1');
    file.append('FileName','APItest.txt');
    file.append('Password','');  //如有設定輸出時進行加密
    file.append('template','');  //如有指定會直接套用
    file.append('datamapper','');//如有指定會直接套用


    return this.http.post(this.Ol_APItest,file);

  }
}
