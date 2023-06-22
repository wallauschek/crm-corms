'use client'
import { observer } from 'mobx-react-lite'

import { Steps } from 'primereact/steps'
import { MenuItem } from 'primereact/menuitem'
import { Button } from 'primereact/button'

import formAdmissaoStore from '@/store/formAdmissaoStore'

const FormAdmissao = observer(() => {
  const onSubmit = () => {
    const cadastro = {
      ...formAdmissaoStore.responsavel,
      ...formAdmissaoStore.candidatos,
    }
    console.log('🚀 ~ file: page.tsx:16 ~ onSubmit ~ cadastro:', cadastro)
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
      <div className="w-full max-w-lg mx-auto">
        <Steps model={items} activeIndex={2} />
        <h2 className="text-xl font-semibold">Dados do responsável</h2>

        <div className="mt-8">
          {/* exibir os dados do responsavel e candidatos aqui */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col p-4 border border-gray-200 rounded">
              <h3 className="font-semibold text-lg">Informações de Contato</h3>
              <div className="flex flex-row mt-2">
                <div className="w-full">
                  <p>
                    <strong>Nome:</strong>{' '}
                    {formAdmissaoStore.responsavel.nomeResponsavel}
                  </p>
                  <p>
                    <strong>CPF:</strong>{' '}
                    {formAdmissaoStore.responsavel.cpfResponsavel}
                  </p>
                  <p>
                    <strong>E-mail:</strong>{' '}
                    {formAdmissaoStore.responsavel.emailResponsavel}
                  </p>
                  <p>
                    <strong>Celular:</strong>{' '}
                    {formAdmissaoStore.responsavel.celularResponsavel}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-4 border border-gray-200 rounded">
              <h3 className="font-semibold text-lg">Outras Informações</h3>
              <div className="flex flex-row mt-2">
                <div className="w-full">
                  <p>
                    <strong>Endereço:</strong>{' '}
                    {formAdmissaoStore.responsavel.enderecoResponsavel}
                  </p>
                  <p>
                    <strong>Motivo da escolha pela escola:</strong>{' '}
                    {formAdmissaoStore.responsavel.motivoEscolhaResponsavel}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button
              type="button"
              className="p-button-success w-full justify-center"
              onClick={() => onSubmit()}
            >
              Concluir
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
})

export default FormAdmissao
