import { useEffect, useState } from 'react';

import { useForm } from "react-hook-form";

import { Button } from "../../../../components/form/Button/Button";
import { Select } from "../../../../components/form/Select/Select";

import { useAuth } from "../../../../hooks/useAuth";
import { medicarAPI } from "../../../../services/medicarAPI";
import { showAlert } from "../../../../utils/alert";
import { timeIsInThePast } from '../../../../utils/functions';

import * as S from "./ModalAppointment.styles";

interface IModal {
  setOpenModal: (isOpen: boolean) => void;
  tryGetAppointments: () => void;
}

interface IDateRequest {
  id: number;
  dia: string;
  horarios: string[];
}

interface IHourState {
  id: string;
  nome: string
}

interface IDateState {
  id: string;
  nome: string;
  hours: IHourState[];
}


export const ModalAppointment = ({ setOpenModal, tryGetAppointments }: IModal) => {

  const { register, handleSubmit, watch } = useForm();
  const { auth } = useAuth();

  const specialty = watch('specialty');
  const doctor = watch('doctor');
  const date = watch('date');

  const [optionsSpecialty, setOptionsSpecialty] = useState([]);
  const [optionsDoctor, setOptionsDoctor] = useState([]);
  const [optionsDate, setOptionsDate] = useState<IDateState[]>([]);
  const [optionsHour, setOptionsHour] = useState<IHourState[]>([]);

  async function tryGetSpecialties() {
    const res = await medicarAPI.getSpecialties(auth?.token);
    if (res.message !== "invalid" && res.data !== undefined) {
      setOptionsSpecialty(res?.data);
    }
  }

  async function tryGetDoctors(speacility: string) {
    const res = await medicarAPI.getDoctors(auth?.token, speacility);
    if (res.message !== "invalid" && res.data !== undefined) {
      setOptionsDoctor(res?.data);
    }
  }

  async function tryGetDate(doctor: string) {
    const res = await medicarAPI.getDate(auth?.token, doctor);
    if (res.message !== "invalid" && res.data !== undefined) {
      const optionsDate = res?.data?.map((date:IDateRequest) =>{
        return {
          id: String(date.id),
          nome: new Date(date.dia).toLocaleDateString('pt-Br'),
          hours: date.horarios.map((hour, index) => {
            return {  
              id: String(index+1),
              nome: hour,
              isDisabled: !timeIsInThePast(Number(hour.slice(0,1)), Number(hour.slice(3,4)))
            }
          })
        }
      })
      setOptionsDate(optionsDate);
    }
  }

  useEffect(() => {
    tryGetSpecialties();
  }, []);

  useEffect(() => {
    !!specialty && tryGetDoctors(specialty)
  },[specialty])

  useEffect(() => {
    !!doctor && tryGetDate(doctor);
  },[doctor])

  useEffect(() => {
    setOptionsHour(!!date ? optionsDate.find(optionDate => optionDate.id == date)?.hours || [] : []);
  },[date])

  async function tryMakeAnAppointment(data: any) {  
    const res = await medicarAPI.postAppointments(auth?.token, data);

    if (res.message === "invalid") {
      showAlert("error", "Houve um erro ao marcar a consulta!");
    } else {
      showAlert("success", "A consulta foi marcada com sucesso.");
      tryGetAppointments();
    }

    setOpenModal(false);
  }

  return (
    <S.DialogContent as="form" onSubmit={handleSubmit(tryMakeAnAppointment)}>
        <S.DialogTitle>Nova consulta</S.DialogTitle>

        <S.Main>
          <Select
            label="Especialidade"
            options={optionsSpecialty}
            {...register("specialty", { required: true })}
          />

          <Select
            disabled={optionsDoctor.length === 0}
            label="Médico"
            options={optionsDoctor}
            {...register("doctor", { required: true })}
          />

          <Select
            disabled={optionsDate.length === 0}
            label="Data"
            options={optionsDate}
            {...register("date", { required: true })}
          />

          <Select
            disabled={optionsHour.length === 0}
            label="Hora"
            options={optionsHour}
            {...register("hour", { required: true })}
          />
        </S.Main>

        <S.ActionButtons>
          <S.DialogClose asChild>
            <Button category="secondary">Cancelar</Button>
          </S.DialogClose>

          <Button category="primary" type="submit">
            Confirmar
          </Button>
        </S.ActionButtons>
    </S.DialogContent>
  );
};
