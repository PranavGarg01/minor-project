import auth from './auth'
import loading from './loading'
import alert from "./alert";
import profile from "./profile";
import prescription from "./prescription";
const rootReducer = {
	loading,
	auth,
	alert,
	profile,
	prescription
};

export default rootReducer;
