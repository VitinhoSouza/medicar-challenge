import { AxiosResponse, AxiosError } from "axios";
import api from "./api";
import { LoginFormData } from "../pages/Login/Login";
import { AppointmentFormData } from "../pages/Home/components/ModalAppointment/ModalAppointment";
import { RegisterFormData } from "../pages/Register/Register";

export const medicarAPI = {
  registerUser: async (user: RegisterFormData) => {
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

  login: async (user: LoginFormData) => {
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

  postAppointments: async (token: string, data: AppointmentFormData) => {
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
