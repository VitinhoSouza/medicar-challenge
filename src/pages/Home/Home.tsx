import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Dialog from "@radix-ui/react-dialog";

import { Button } from "../../components/form/Button/Button";
import { ModalAppointment } from "./components/ModalAppointment/ModalAppointment";

import { medicarAPI } from "../../services/medicarAPI";
import { useAuth } from "../../hooks/useAuth";
import { showAlert } from "../../utils/alert";

import { ReactComponent as IconX } from "../../assets/icons/iconX.svg";
import { ReactComponent as IconPlus } from "../../assets/icons/iconPlus.svg";
import logoImage from "../../assets/logo.png";

import * as MS from "./components/ModalAppointment/ModalAppointment.styles";
import * as S from "./Home.styles";

interface IApoointment {
  dia: string;
  horario: string;
  id: number;
  medico: {
    nome: string;
    especialidade: { nome: string };
  };
}

export const Home = () => {
  const [appointments, setAppointments] = useState<IApoointment[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const { auth, setAuthLS } = useAuth();
  const navigate = useNavigate();

  async function tryDeleteAppointment(appointmentId:number) {
    const res = await medicarAPI.deleteAppointment(auth?.token, appointmentId);
    if (res.message === "invalid") {
      showAlert("error", "Houve um erro ao desmarcar a consulta!");
    } else {
      showAlert("success", "A consulta foi desmarcada com sucesso.");
      tryGetAppointments();
    }
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
    setAuthLS({ token: null });
    showAlert("success", "Logout realizado.");
  }

  useEffect(() => {
    if (auth !== undefined && (auth.token === "null" || auth.token === null)) {
      navigate("/");
    }
  }, [auth]);

  return (
    <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
      <S.ContainerPageHome>
        <S.ContentPageHome>
          <S.Header>
            <img src={logoImage} />

            <S.HeaderRight>
              <span>Victor Souza</span>

              <Button category="tertiary" onClick={tryLogout}>
                Desconectar
              </Button>
            </S.HeaderRight>
          </S.Header>

          <S.ContainerTable>
            <S.ContainerTitleAndAction>
              <h2>Consulta clínica</h2>

              <MS.ButtonTriggerModal asChild>
                <Button>
                  <IconPlus />
                  Nova consulta
                </Button>
              </MS.ButtonTriggerModal>
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
                    <td>{new Date(appointment.dia).toLocaleDateString('pt-Br')}</td>
                    <td>{appointment.horario}</td>
                    <td>
                      <Button category="tertiary" onClick={()=>tryDeleteAppointment(appointment.id)}>
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
      </S.ContainerPageHome>

      <MS.DialogPortal>
        <MS.DialogOverlay />
        <ModalAppointment setOpenModal={setOpenModal} tryGetAppointments={tryGetAppointments} />
      </MS.DialogPortal>
    </Dialog.Root>
  );
};
