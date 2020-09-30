import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipePipe implements PipeTransform {

  constructor(
    private http: HttpClient,
  ) { }

  async transform(src: string): Promise<any> {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4MTMwOTY5MzU1IiwiaWF0IjoxNjAxNDc2NTkyLCJleHAiOjE2MDE0ODU1OTIsInBobnVtYmVyIjoiODEzMDk2OTM1NSIsInVzZXJUeXBlIjoiSEVBTFRIIFdPUktFUiJ9.hPLWtyFnAzJBL6awbUNVQBHbGyV-serGP3WfymqOAnhjpPcgpj2m6BeK7l6UPeyecdxIZavS5QWsfE92fRK49A';
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const imageBlob = await this.http.get(src, { headers, responseType: 'blob' }).toPromise();
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(imageBlob);
    });
  }

}
