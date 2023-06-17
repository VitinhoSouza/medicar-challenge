import api from './api';

export interface IRegisterForm {
    username: string,
    email: string,
    password: string,
    password_confirmation?: string
}
  
export interface ILoginForm {
    username: string,
    password: string,
}

export interface IAppointmentForm{

}


export const medicarAPI = {

    registerUser: async (user:IRegisterForm) => {

        let response = 'invalid';
        await api.post("/users", user)
        .then((res:any) => {
            response = res.data;
        }).catch((e:any) => {
            console.log(e);
        })

        return response;
    },

    login: async (user:ILoginForm) => {

        let response = 'invalid';
        await api.post("/users/login", user)
        .then((res:any) => {
            response = res.data;
        }).catch((e:any) => {
            console.log(e);
        })

        return response;
    },

    getAppointments: async (token: string | null) => {
        let response = {
            message: 'invalid',
            data: []
        }
        await api.get("/consultas", { headers: { 'Authorization': `Token ${token}`}})
        .then((res:any) => {
            response = {
                message: 'success',
                data: res.data
            }
        }).catch((e:any) => {
            console.log(e);
        })

        return response;
    },

    getSpecialties: async (token: string | null) => {
        let response = {
            message: 'invalid',
            data: []
        }
        await api.get("/especialidades", { headers: { 'Authorization': `Token ${token}`}})
        .then((res:any) => {
            response = {
                message: 'success',
                data: res.data
            }
        }).catch((e:any) => {
            console.log(e);
        })

        return response;
    },

    getDoctors: async (token: string | null, specialty: string) => {
        let response = {
            message: 'invalid',
            data: []
        }

        await api.get(`/medicos?especialidade=${specialty}`, { headers: { 'Authorization': `Token ${token}`}})
        .then((res:any) => {
            response = {
                message: 'success',
                data: res.data
            }
        }).catch((e:any) => {
            console.log(e);
        })

        return response;
    },

    getDate: async (token: string | null, doctor: string) => {
        let response = {
            message: 'invalid',
            data: []
        }

        await api.get(`/agendas?medico=${doctor}`, { headers: { 'Authorization': `Token ${token}`}})
        .then((res:any) => {
            response = {
                message: 'success',
                data: res.data
            }
        }).catch((e:any) => {
            console.log(e);
        })

        return response;
    },

    postAppointments: async (token: string | null, data: IAppointmentForm) => {
        let response = {
            message: 'invalid',
            data: []
        }
        await api.post("/consultas", { data }, { headers: { 'Authorization': `Token ${token}`}})
        .then((res:any) => {
            response = {
                message: 'success',
                data: res.data
            }
        }).catch((e:any) => {
            console.log(e);
        })

        return response;
    },

    deleteAppointment: async (token: string | null, appointmentId:number) => {
        let response = {
            message: 'invalid',
            data: []
        }
        await api.delete("/consultas/" + appointmentId, { headers: { 'Authorization': `Token ${token}`}})
        .then((res:any) => {
            response = {
                message: 'success',
                data: res.data
            }
        }).catch((e:any) => {
            console.log(e);
        })

        return response;
    },

}