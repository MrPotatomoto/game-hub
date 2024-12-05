import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'abdd50fc97e0404db010f8797dfa3368'
  }
})
