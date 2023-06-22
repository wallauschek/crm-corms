'use client'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import formAdmissaoStore from '@/store/formAdmissaoStore'

import { InputText } from 'primereact/inputtext'
import { InputMask } from 'primereact/inputmask'
import { Button } from 'primereact/button'
import { Steps } from 'primereact/steps'
import { MenuItem } from 'primereact/menuitem'

const FormAdmissao = observer(() => {
  const { register, handleSubmit, watch } = useForm()
  const router = useRouter()

  const isFormValid =
    watch('cpfResponsavel') &&
    watch('nomeResponsavel') &&
    watch('emailResponsavel') &&
    watch('telefoneResponsavel') &&
    watch('enderecoResponsavel') &&
    watch('motivoEscolhaResponsavel')

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data, null, 2))
    formAdmissaoStore.setResponsavel(data)
    router.push('/processo-admissao/candidatos')
  }

  const items: MenuItem[] = [
    {
      label: 'Responsável',
      url: '/processo-admissao/responsavel',
    },
    {
      label: 'Candidatos',
      url: '/processo-admissao/candidatos',
    },
    {
      label: 'Confirmação',
      url: '/processo-admissao/confirmacao',
    },
  ]

  return (
    <div className="max-w-screen-lg mx-auto pb-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg mx-auto"
      >
        <Steps model={items} />
        <h2 className="text-xl font-semibold">Dados do responsável</h2>

        <div className="mt-8">
          <span className="p-float-label">
            <InputMask
              id="cpfResponsavel"
              mask={'999.999.999-99'}
              {...register('cpfResponsavel')}
              className="w-full"
              onMouseUp={(event) => {
                const input = event.target as HTMLInputElement
                input.setSelectionRange(0, 0)
              }}
            />
            <label htmlFor="cpfResponsavel">CPF do Responsável</label>
          </span>
        </div>

        <div className="mt-8">
          <span className="p-float-label">
            <InputText
              id="nomeResponsavel"
              {...register('nomeResponsavel')}
              className="w-full"
            />
            <label htmlFor="nomeResponsavel">Nome do Responsável</label>
          </span>
        </div>

        <div className="mt-8">
          <span className="p-float-label">
            <InputText
              id="emailResponsavel"
              {...register('emailResponsavel')}
              type="email"
              className="w-full"
            />
            <label htmlFor="emailResponsavel">E-mail do Responsável</label>
          </span>
        </div>

        <div className="mt-8">
          <span className="p-float-label">
            <InputMask
              id="telefoneResponsavel"
              mask={'(99) 99999-9999'}
              {...register('telefoneResponsavel')}
              className="w-full"
              onMouseUp={(event) => {
                const input = event.target as HTMLInputElement
                input.setSelectionRange(0, 0)
              }}
            />
            <label htmlFor="telefoneResponsavel">Telefone do Responsável</label>
          </span>
        </div>

        <div className="mt-8">
          <span className="p-float-label">
            <InputText
              id="enderecoResponsavel"
              {...register('enderecoResponsavel')}
              className="w-full"
            />
            <label htmlFor="enderecoResponsavel">Endereço do Responsável</label>
          </span>
        </div>

        <div className="mt-8">
          <span className="p-float-label">
            <InputText
              id="motivoEscolhaResponsavel"
              {...register('motivoEscolhaResponsavel')}
              className="w-full"
            />
            <label htmlFor="motivoEscolhaResponsavel">
              Motivo da escolha pelo CEL
            </label>
          </span>
        </div>

        <div className="mt-8">
          <Button
            type="submit"
            className="p-button-success w-full justify-center"
            disabled={!isFormValid}
          >
            Avançar
          </Button>
        </div>
      </form>
    </div>
  )
})

export default FormAdmissao
