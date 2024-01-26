import axios from 'axios';

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }
  
  

 const apiClient= axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'9c3fe5e4931846fd970e78e395ac1a64'
    }
})
export default  apiClient;