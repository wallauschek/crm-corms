'use client'
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';

export default function Responsavel() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(JSON.stringify(data, null, 2));
        // Aqui você pode enviar os dados para o servidor ou manipulá-los de alguma forma
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="">
            <h2 className="text-2xl font-semibold">Responsável</h2>

            <span className="m-8 p-float-label">
                <InputMask id="cpfResponsavel" mask={"999.999.999-99"} {...register('cpfResponsavel')} />
                <label htmlFor="cpfResponsavel">CPF do Responsável</label>
            </span>

            <span className="m-8 p-float-label">
                <InputText id="nomeResponsavel" {...register('nomeResponsavel')} />
                <label htmlFor="nomeResponsavel">Nome do Responsável</label>
            </span>

            <span className="m-8 p-float-label">
                <InputText id="emailResponsavel" {...register('emailResponsavel')} type="email" />
                <label htmlFor="emailResponsavel">E-mail do Responsável</label>
            </span>

            <span className="m-8 p-float-label">
                <InputMask id="telefoneResponsavel" mask={"(99) 99999-9999"} {...register('telefoneResponsavel')} />
                <label htmlFor="telefoneResponsavel">Telefone do Responsável</label>
            </span>

            <span className="m-8 p-float-label">
                <InputText id="enderecoResponsavel" {...register('enderecoResponsavel')} />
                <label htmlFor="enderecoResponsavel">Endereço do Responsável</label>
            </span>

            <span className="m-8 p-float-label">
            <InputText id="motivoEscolha" {...register('motivoEscolha')} />
                <label htmlFor="motivoEscolha">Motivo da escolha pelo CEL</label>
            </span>

            <Button type="submit" className="mt-4">Enviar</Button>
        </form>
    );
}
