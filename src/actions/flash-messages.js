// Action types import
import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../constants/flash-messages';

export function addFlashMessage(type, text) {
	const data = {
		type: type,
		text: text
	};

	return {
		type: ADD_FLASH_MESSAGE,
		payload: data
	}
}

// cleans appeared flash message
export function destroyFlashMessage() { return { type: DELETE_FLASH_MESSAGE } }
