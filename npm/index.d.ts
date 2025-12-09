declare module '@apiverve/randomjoke' {
  export interface randomjokeOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface randomjokeResponse {
    status: string;
    error: string | null;
    data: RandomJokeData;
    code?: number;
  }


  interface RandomJokeData {
      score:     number;
      setup:     string;
      punchline: string;
  }

  export default class randomjokeWrapper {
    constructor(options: randomjokeOptions);

    execute(callback: (error: any, data: randomjokeResponse | null) => void): Promise<randomjokeResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: randomjokeResponse | null) => void): Promise<randomjokeResponse>;
    execute(query?: Record<string, any>): Promise<randomjokeResponse>;
  }
}
