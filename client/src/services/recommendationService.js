
import axios from "axios";

const API="http://localhost:5000/api/recommendations";

export const getRecommendations=()=>axios.get(API);
