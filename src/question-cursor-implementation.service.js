// import { HttpClient } from '@angular/common/http';
// import { Injectable } from "@angular/core";
// import { QuestionCursor } from '@project-sunbird/sunbird-quml-player-v9';
// import { Observable, of, throwError as observableThrowError } from 'rxjs';
// import { map, mergeMap } from 'rxjs/operators';


// export class QuestionCursorImplementationService extends QuestionCursor {
//     useEffect(()=>{
//         fetch()
//       })
//       try{
//         axios.get(`https://api.dev.diksha.gov.in/api/collection/v1/hierarchy/do_2134773513380331521130`).then(res =>{
//            setcoll(res.data.result.content.children);
//            setarti(coll[0].children[0].artifactUrl);
//            console.log(res.data.result.content);
//         })
//        }catch(err){
//          console.log(err.message);
//        }
//      })
//     listUrl: string; // Define this url to call list api in server
//     constructor(private http: HttpClient) { }

//     getQuestions(identifiers: string[]): Observable<any> {
//         const option: any = {
//             url: this.listUrl,
//             data: {
//                 request: {
//                     search: { identifier: identifiers }
//                 }
//             }
//         };
//         return this.post(option).pipe(map((data) => data.result));
//     }

//     getQuestion(identifier: string): Observable<any> {
//         const option: any = {
//             url: this.listUrl,
//             data: {
//                 request: {
//                     search: { identifier: [identifier] }
//                 }
//             }
//         };
//         return this.post(option).pipe(map((data) => data.result));
//     }

//     getQuestionSet(identifier: string): Observable<any> {
//         return of({})
//     }

//     private post(requestParam): Observable<any> {
//         const httpOptions = {
//             headers: { 'Content-Type': 'application/json' }
//         };
//         return this.http.post(requestParam.url, requestParam.data, httpOptions).pipe(
//             mergeMap((data: any) => {
//                 if (data.responseCode !== 'OK') {
//                     return observableThrowError(data);
//                 }
//                 return of(data);
//             }));
//     }
//     getAllQuestionSet(identifiers: string[]) {
//         return of({});
//     }
// }