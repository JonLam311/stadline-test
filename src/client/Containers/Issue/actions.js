import {
	ONCHANGE_INPUT,
	SEND_URL_REQUEST,
	SEND_URL_SUCCESS,
	SEND_URL_ERROR,
} from './constants';


export function onChangeInputAction(payload) {
	return {
		type: ONCHANGE_INPUT,
		payload,
	};
}

// ========== START CONTROL SEND URL ACTION
export function sendUrlRequestAction() {
	return {
		type: SEND_URL_REQUEST,
	};
}

export function sendUrlSuccessAction(payload) {
	return {
		type: SEND_URL_SUCCESS,
		payload,
	};
}

export function sendUrlErrorAction(payload) {
	return {
		type: SEND_URL_ERROR,
		payload,
	};
}
// ======== END CONTROL SEND URL ACTION


export const onChangeInput = onChangeInputAction;

export const sendUrlRequest = sendUrlRequestAction;
export const sendUrlSuccess = sendUrlSuccessAction;
export const sendUrlError = sendUrlErrorAction;
