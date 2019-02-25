import { Injectable } from '@angular/core';
import { CoreService } from '../core/core.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChatService extends CoreService {

  constructor(public http: HttpClient) {
    super(http);
  }

  send(intent, botId = 'default') {
    return this.doPost(`/api/v1?botId=${botId}`, intent);
  }

}
