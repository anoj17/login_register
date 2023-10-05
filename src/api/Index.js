import axios from "axios";
import { toast } from "react-toastify";

export const apiClient = axios.create({
	baseURL: "https://sapi.synergydorm.com/api",
	headers: {
		"Content-Type": "application/json"
	}

})

export const register = async (data) => {
	return await apiClient.post("/client-register", data)
}

export const login = async (data) => {
	return await apiClient.post("/login", data)
}

export const forget = async (data) => {
	return await apiClient.post("/forgot-password", data)
}

export const reset = async (data) => {
	return await apiClient.post("/reset-password", data)
}

export const clientTable = async () => {
	return await apiClient.get('/client')
}

// export const clientTableDelete = async (data) => {
// 	return await apiClient.delete('/client-list', data)
// }

export const addClient = async (data) => {
	// console.log('====data====', data)
	return await apiClient.post('/client', data)
}

export const editClient = async (data) => {
	// console.log('====data====', data)
	return await apiClient.put(`/client/${data.id}`, data)
}

export const deleteClient = async (id) => {
	// console.log('====data====', data)
	return await apiClient.delete(`/client/${id}`)
}

//for error handle

apiClient.interceptors.response.use(
	function (response) {
		const { status, data } = response;
		if (status == 201 || status == 200) {
			toast.success(data.message, { autoClose: 1500 });
		}
		return response;
	},
	function (error) {
		const { status, data } = error.response;
		if (status == 401 || status == 403 || status == 409) {
			toast.error(data.message, { autoClose: 1500 });
		}
		if (status == 500) {
			toast.error("Server Error!", { autoClose: 1500 });
		}
		if (status == 413) {
			toast.error("File size large!", { autoClose: 1500 });
		}
		if (status == 422) {
			toast.error("Please fill form !", { autoClose: 1500 });
		}
		return Promise.reject(error);
	}
)