import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/form/Button/Button";
import { ModalAppointment } from "./components/ModalAppointment/ModalAppointment";
import { Modal } from "../../components/structure/Modal";

import { medicarAPI } from "../../services/medicarAPI";
import { useAuth } from "../../hooks/useAuth";
import { showAlert } from "../../utils/alert";

import { ReactComponent as IconX } from "../../assets/icons/iconX.svg";
import { ReactComponent as IconPlus } from "../../assets/icons/iconPlus.svg";
import logoImage from "../../assets/logo.png";

import * as MS from "./components/ModalAppointment/ModalAppointment.styles";
import * as M from "../../components/structure/Modal.styles";
import * as S from "./Home.styles";

interface IAppointment {
  dia: string;
  horario: string;
  id: number;
  medico: {
    nome: string;
    especialidade: { nome: string };
  };
}

export const Home = () => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [openModalNewAppointment, setOpenModalNewAppointment] = useState(false);
  const [openModalDeleteAppointment, setOpenModalDeleteAppointment] =
    useState(false);
  const [openModalLogout, setOpenModalLogout] = useState(false);
  const [appointmentToBeDeleted, setAppointmentToBeDeleted] = useState(
    {} as IAppointment
  );

  const { auth, setAuthLS } = useAuth();
  const navigate = useNavigate();

  function toggleActiveModalDeleteAppointment(appointment: IAppointment) {
    setOpenModalDeleteAppointment(true);
    setAppointmentToBeDeleted(appointment);
  }

  async function tryDeleteAppointment(appointmentId: number) {
    const res = await medicarAPI.deleteAppointment(auth?.token, appointmentId);
    if (res.message === "invalid") {
      showAlert("error", "Houve um erro ao desmarcar a consulta!");
    } else {
      showAlert("success", "A consulta foi desmarcada com sucesso.");
      tryGetAppointments();
    }
    setOpenModalDeleteAppointment(false);
  }

  async function tryGetAppointments() {
    const res = await medicarAPI.getAppointments(auth?.token);
    if (res.message !== "invalid" && res.data !== undefined) {
      setAppointments(res.data);
    }
  }

  useEffect(() => {
    tryGetAppointments();
  }, []);

  function tryLogout() {
    setAuthLS({ token: "" });
    showAlert("success", "Logout realizado.");
  }

  useEffect(() => {
    if (auth !== undefined && !auth.token) {
      navigate("/");
    }
  }, [auth]);

  return (
    <S.ContainerPageHome>
      <S.ContentPageHome>
        <S.Header>
          <img src={logoImage} />

          <S.HeaderRight>
            <span>Victor Souza</span>

            <Button category="tertiary" onClick={()=>setOpenModalLogout(true)}>
              Desconectar
            </Button>
          </S.HeaderRight>
        </S.Header>

        <S.ContainerTable>
          <S.ContainerTitleAndAction>
            <h2>Consulta clínica</h2>

            <Button
              onClick={() => setOpenModalNewAppointment(true)}
              style={{
                padding: "1rem 1rem",
                fontSize: "0.8125rem",
                fontWeight: "400",
                height: "1.5rem",
                lineHeight: "1.3125rem"
              }}
            >
              <IconPlus />
              Nova consulta
            </Button>
          </S.ContainerTitleAndAction>

          <S.TableAppointments>
            <thead>
              <tr>
                <th>Especialidade</th>
                <th>Profissional</th>
                <th>Data</th>
                <th>Hora</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.medico.especialidade.nome}</td>
                  <td>{appointment.medico.nome}</td>
                  <td>
                    {new Date(appointment.dia).toLocaleDateString("pt-Br")}
                  </td>
                  <td>{appointment.horario}</td>
                  <td>
                    <Button
                      category="tertiary"
                      onClick={() =>
                        toggleActiveModalDeleteAppointment(appointment)
                      }
                    >
                      <IconX />
                      Desmarcar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </S.TableAppointments>
        </S.ContainerTable>
      </S.ContentPageHome>

      <MS.DialogRoot
        open={openModalNewAppointment}
        onOpenChange={setOpenModalNewAppointment}
      >
        <MS.DialogPortal>
          <MS.DialogOverlay />
          <ModalAppointment
            setOpenModal={setOpenModalNewAppointment}
            tryGetAppointments={tryGetAppointments}
          />
        </MS.DialogPortal>
      </MS.DialogRoot>

      <M.DialogRoot
        open={openModalDeleteAppointment}
        onOpenChange={setOpenModalDeleteAppointment}
      >
        <M.DialogPortal>
          <M.DialogOverlay />
          <Modal
            title="Deseja realmente desmarcar a consulta agendada?"
            description={`Consulta no dia ${new Date(
              appointmentToBeDeleted.dia
            ).toLocaleDateString("pt-Br")} às ${
              appointmentToBeDeleted.horario
            } com o Médico ${appointmentToBeDeleted.medico?.nome}.`}
            cancelFunction={() => setOpenModalDeleteAppointment(false)}
            okFunction={() => tryDeleteAppointment(appointmentToBeDeleted.id)}
          />
        </M.DialogPortal>
      </M.DialogRoot>

      <M.DialogRoot
        open={openModalDeleteAppointment}
        onOpenChange={setOpenModalDeleteAppointment}
      >
        <M.DialogPortal>
          <M.DialogOverlay />
          <Modal
            title="Deseja realmente desmarcar a consulta agendada?"
            description={`Consulta no dia ${new Date(
              appointmentToBeDeleted.dia
            ).toLocaleDateString("pt-Br")} às ${
              appointmentToBeDeleted.horario
            } com o Médico ${appointmentToBeDeleted.medico?.nome}.`}
            cancelFunction={() => setOpenModalDeleteAppointment(false)}
            okFunction={() => tryDeleteAppointment(appointmentToBeDeleted.id)}
          />
        </M.DialogPortal>
      </M.DialogRoot>

      <M.DialogRoot
        open={openModalLogout}
        onOpenChange={setOpenModalLogout}
      >
        <M.DialogPortal>
          <M.DialogOverlay />
          <Modal
            title="Deseja realizar logout da plataforma?"
            cancelFunction={() => setOpenModalLogout(false)}
            okFunction={tryLogout}
          />
        </M.DialogPortal>
      </M.DialogRoot>
    </S.ContainerPageHome>
  );
};
