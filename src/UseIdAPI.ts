import { IStartSessionResponse } from "./IStartSessionResponse";
import { Identity } from "./Identity";
import axios, { AxiosInstance } from "axios";

export class UseIdAPI {
  public domain: string;
  public widgetSrc: string;
  public apiBaseUrl: string;

  public api: AxiosInstance;

  constructor(apiKey: string, domain: string) {
    this.domain = domain;
    this.widgetSrc = `${domain}/widget.js`;
    this.apiBaseUrl = `${domain}/api/v1/identification/sessions`;
    this.api = axios.create({
      baseURL: this.apiBaseUrl,
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    })
  }

  async startSession(): Promise<IStartSessionResponse> {
    const response = await this.api.post('');
    return {
      tcTokenUrl: response.data.tcTokenUrl,
    };
  }

  async getIdentity(eIdSessionId: string): Promise<Identity> {
    const response = await this.api.get(`/${eIdSessionId}`);
    return new Identity(response.data);
  }
}

export interface IUseIdAPI {
  startSession(): Promise<IStartSessionResponse>;
  getIdentity(eIdSessionId: string): Promise<Identity>;
}
