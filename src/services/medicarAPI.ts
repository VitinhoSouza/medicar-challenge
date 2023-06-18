import { AxiosResponse, AxiosError } from "axios";
import api from "./api";

export interface IRegisterForm {
  username: string;
  email: string;
  password: string;
  password_confirmation?: string;
}

export interface ILoginForm {
  username: string;
  password: string;
  remember_password: boolean;
}

export interface IAppointmentForm {
  specialty: string;
  doctor: string;
  date: string;
  hour: string;
}

export const medicarAPI = {
  registerUser: async (user: IRegisterForm) => {
    let response = "invalid";
    await api
      .post("/users", user)
      .then((res: AxiosResponse) => {
        response = res.data;
      })
      .catch((e: AxiosError) => {
        console.log(e);
      });

    return response;
  },

  login: async (user: ILoginForm) => {
    let response = {
      message: "invalid",
      token: "",
    };
    await api
      .post("/users/login", user)
      .then((res: AxiosResponse) => {
        response = {
          message: "success",
          token: res.data.token,
        };
      })
      .catch((e: AxiosError) => {
        console.log(e);
      });

    return response;
  },

  getAppointments: async (token: string) => {
    let response = {
      message: "invalid",
      data: [],
    };
    await api
      .get("/consultas", { headers: { Authorization: `Token ${token}` } })
      .then((res: AxiosResponse) => {
        response = {
          message: "success",
          data: res.data,
        };
      })
      .catch((e: AxiosError) => {
        console.log(e);
      });

    return response;
  },

  getSpecialties: async (token: string) => {
    let response = {
      message: "invalid",
      data: [],
    };
    await api
      .get("/especialidades", { headers: { Authorization: `Token ${token}` } })
      .then((res: AxiosResponse) => {
        response = {
          message: "success",
          data: res.data,
        };
      })
      .catch((e: AxiosError) => {
        console.log(e);
      });

    return response;
  },

  getDoctors: async (token: string, specialty: string) => {
    let response = {
      message: "invalid",
      data: [],
    };

    await api
      .get(`/medicos?especialidade=${specialty}`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res: AxiosResponse) => {
        response = {
          message: "success",
          data: res.data,
        };
      })
      .catch((e: AxiosError) => {
        console.log(e);
      });

    return response;
  },

  getDate: async (token: string, doctor: string) => {
    let response = {
      message: "invalid",
      data: [],
    };

    await api
      .get(`/agendas?medico=${doctor}`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res: AxiosResponse) => {
        response = {
          message: "success",
          data: res.data,
        };
      })
      .catch((e: AxiosError) => {
        console.log(e);
      });

    return response;
  },

  postAppointments: async (token: string, data: IAppointmentForm) => {
    let response = {
      message: "invalid",
      data: [],
    };
    await api
      .post(
        "/consultas",
        { data },
        { headers: { Authorization: `Token ${token}` } }
      )
      .then((res: AxiosResponse) => {
        response = {
          message: "success",
          data: res.data,
        };
      })
      .catch((e: AxiosError) => {
        console.log(e);
      });

    return response;
  },

  deleteAppointment: async (token: string, appointmentId: number) => {
    let response = {
      message: "invalid",
      data: [],
    };
    await api
      .delete("/consultas/" + appointmentId, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res: AxiosResponse) => {
        response = {
          message: "success",
          data: res.data,
        };
      })
      .catch((e: AxiosError) => {
        console.log(e);
      });

    return response;
  },
};
