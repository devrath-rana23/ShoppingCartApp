import axios from 'axios';
import {BASE_API_URL} from '../utility/appConstant/Environment';

export default axios.create({
  baseURL: BASE_API_URL,
});
